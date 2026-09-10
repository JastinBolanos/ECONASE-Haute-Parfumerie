import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { useCart } from '../../hooks/useCart';
import { ShoppingBag, Trash2, ArrowRight, ShieldCheck, Gift, UserPlus, LogIn } from 'lucide-react';
import { ComingSoonModal } from '../../components/common/ComingSoonModal';

export const CartPage: React.FC = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const [isComingSoonOpen, setIsComingSoonOpen] = useState(false);

  const isCartEmpty = cart.items.length === 0;

  return (
    <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 py-8 sm:py-14">
      <Breadcrumbs
        items={[
          { label: 'Inicio', to: '/home' },
          { label: 'Bolsa de Compras' },
        ]}
      />

      <div className="mb-8">
        <h1 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1A1918]">
          Su Bolsa de Compras
        </h1>
        <p className="text-xs sm:text-sm text-[#7A7269] mt-1">
          {isCartEmpty
            ? 'Actualmente no tiene creaciones seleccionadas en su bolsa.'
            : `${cart.totalCount} ${cart.totalCount === 1 ? 'creación de autor seleccionada' : 'creaciones de autor seleccionadas'}`}
        </p>
      </div>

      {isCartEmpty ? (
        <div className="bg-white border border-[#E8E4DC] rounded-3xl p-12 sm:p-16 text-center max-w-lg mx-auto shadow-xs">
          <div className="w-16 h-16 rounded-full bg-[#F5F2EC] text-[#80766D] mx-auto flex items-center justify-center mb-5">
            <ShoppingBag className="w-7 h-7" strokeWidth={1.5} />
          </div>
          <h2 className="font-serif-luxury text-2xl font-medium text-[#1A1918] mb-2">
            La bolsa está vacía
          </h2>
          <p className="text-xs sm:text-sm text-[#6B635A] mb-8 leading-relaxed">
            Explore nuestra colección de fragancias de autor y descubra su firma olfativa.
          </p>
          <Link
            to="/home"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#1A1918] text-white text-xs uppercase tracking-widest font-medium hover:bg-[#332F2C] transition-colors shadow-xs"
          >
            <span>Ver Colección de Fragancias</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Items List */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white border border-[#E8E4DC] rounded-3xl p-6 sm:p-8 shadow-xs divide-y divide-[#EFECE5]">
              {cart.items.map((item) => (
                <div
                  key={item.product.id}
                  className="py-6 first:pt-0 last:pb-0 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
                >
                  <div className="flex items-center gap-5">
                    <Link
                      to={`/home/fragancias/${item.product.id}`}
                      className="shrink-0 w-20 h-24 sm:w-24 sm:h-28 bg-[#F4F1EA] rounded-2xl overflow-hidden border border-[#DDD7CD] flex items-center justify-center p-2"
                    >
                      <img
                        src={item.product.imageUrl}
                        alt={item.product.name}
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src =
                            'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80';
                        }}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </Link>

                    <div>
                      <span className="text-[10px] tracking-widest uppercase text-[#857B72] block mb-1">
                        {item.product.category}
                      </span>
                      <Link
                        to={`/home/fragancias/${item.product.id}`}
                        className="font-serif-luxury text-lg sm:text-xl font-medium text-[#1A1918] hover:text-[#524B43] transition-colors"
                      >
                        {item.product.name}
                      </Link>
                      <span className="text-xs text-[#736B63] block mt-0.5">
                        {item.product.volume} · Extrait de Parfum
                      </span>
                      <span className="text-xs text-[#524B44] font-medium block mt-1">
                        Cantidad: {item.quantity}
                      </span>
                    </div>
                  </div>

                  <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-4">
                    <span className="text-lg sm:text-xl font-serif-luxury font-medium text-[#1A1918]">
                      {item.product.price * item.quantity},00 {item.product.currency}
                    </span>

                    <button
                      type="button"
                      onClick={() => removeFromCart(item.product.id)}
                      className="inline-flex items-center gap-1.5 text-xs text-[#8A8177] hover:text-red-700 transition-colors cursor-pointer"
                      aria-label={`Eliminar ${item.product.name} de la bolsa`}
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Eliminar</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Complimentary gift notice */}
            <div className="p-5 rounded-2xl bg-[#F6F4EE] border border-[#E3DDD1] flex items-center gap-3.5 text-xs text-[#524B43]">
              <Gift className="w-5 h-5 text-[#1A1918] shrink-0" />
              <p>
                Cada pedido incluye sin coste dos muestras de 2 ml seleccionadas por nuestro maestro perfumista y presentación en estuche de regalo sellado a mano.
              </p>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-4">
            <div className="bg-white border border-[#E8E4DC] rounded-3xl p-6 sm:p-8 shadow-xs sticky top-24">
              <h2 className="font-serif-luxury text-xl font-medium text-[#1A1918] mb-6 pb-4 border-b border-[#EFECE5]">
                Resumen de Compra
              </h2>

              <div className="space-y-3 text-xs text-[#59524A] mb-6">
                <div className="flex items-center justify-between">
                  <span>Subtotal</span>
                  <span className="font-medium text-[#1A1918]">
                    {cart.totalAmount},00 €
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Envío asegurado a domicilio</span>
                  <span className="text-emerald-700 font-medium">Cortesía de la Maison</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Impuestos incluidos (IVA)</span>
                  <span className="text-[#857B72]">Incluido</span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#EFECE5] flex items-baseline justify-between mb-6">
                <span className="text-sm font-medium text-[#1A1918]">Total</span>
                <span className="text-2xl font-serif-luxury font-medium text-[#1A1918]">
                  {cart.totalAmount},00 €
                </span>
              </div>

              {/* Registration & Login Actions for Guest Flow */}
              <div className="space-y-3 mb-4">
                <button
                  id="cart-register-btn"
                  type="button"
                  onClick={() => setIsComingSoonOpen(true)}
                  className="w-full py-3.5 px-6 rounded-full bg-[#1A1918] text-[#FAF9F5] text-xs uppercase tracking-widest font-medium hover:bg-[#332F2C] transition-all cursor-pointer shadow-xs active:scale-[0.99] flex items-center justify-center gap-2"
                >
                  <UserPlus className="w-4 h-4" />
                  <span>Registrarse</span>
                </button>

                <button
                  id="cart-login-btn"
                  type="button"
                  onClick={() => setIsComingSoonOpen(true)}
                  className="w-full py-3.5 px-6 rounded-full bg-white border border-[#DDD7CD] text-[#1A1918] text-xs uppercase tracking-widest font-medium hover:bg-[#FAF9F5] hover:border-[#1A1918] transition-all cursor-pointer shadow-2xs active:scale-[0.99] flex items-center justify-center gap-2"
                >
                  <LogIn className="w-4 h-4" />
                  <span>Iniciar sesión</span>
                </button>
              </div>

              <button
                type="button"
                onClick={clearCart}
                className="w-full py-2 text-center text-xs text-[#8A8177] hover:text-[#1A1918] transition-colors cursor-pointer"
              >
                Vaciar bolsa
              </button>

              <div className="mt-6 pt-4 border-t border-[#F0ECE4] flex items-center justify-center gap-2 text-[11px] text-[#7A726A]">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>Pago cifrado y certificado por ECONASE</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Coming Soon Modal */}
      <ComingSoonModal
        isOpen={isComingSoonOpen}
        onClose={() => setIsComingSoonOpen(false)}
        title="Próximamente"
        message="La boutique digital y el registro exclusivo de clientes de ECONASE se habilitarán muy pronto en nuestra próxima actualización."
      />
    </div>
  );
};
