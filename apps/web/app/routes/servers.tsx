import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "Servers | TMW.GG" }];
};

export default function Servers() {
  return (
    <>
      <div className="ui-container ui-mx-auto ui-p-8">
        <h1 className="ui-text-4xl ui-font-bold ui-mb-6">Our Servers</h1>
        <div className="ui-grid ui-grid-cols-1 md:ui-grid-cols-2 lg:ui-grid-cols-3 ui-gap-6">
          {/* Add your server cards/content here */}
          <div className="ui-bg-white ui-rounded-lg ui-shadow-md ui-p-6">
            <h2 className="ui-text-2xl ui-font-semibold ui-mb-4">Server 1</h2>
            <p className="ui-text-gray-600">Server description goes here...</p>
          </div>
        </div>
      </div>
    </>
  );
} 
