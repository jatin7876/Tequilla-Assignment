import React from "react";

// Outline Text Style
const outlineStyle = {
  WebkitTextStroke: "2px #1e40af",
  color: "transparent",
  fontWeight: 300,
};

export default function Solution() {
  return (
    <>
    <section id="solutions" className="w-full py-20 bg-transparent min-h-screen">
      <div className="w-full max-w-8xl mx-auto px-8">
        {/* Title */}
        <h1
          className="text-10xl md:text-8xl  font-manrope mb-6"
          style={outlineStyle}
        >
          Solutions
        </h1>

        <p className="text-[#003366] text-lg font-manrope max-w-2xl mt-4">
          We provide the best solutions and tools for all your data needs to ensure
          your achieve maximum productivity and returns.
        </p>

        {/* Sub Title */}
        <h3 className="text-6xl  font-manrope text-[#226eba] mt-12 mb-15">
          Open Source
        </h3>

        {/* Grid */}
        { }
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* GitHub */}
          <div className="space-y-3">
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="GitHub"
              className="w-20 h-20"
            />
            <h4 className="text-[#ff7a21] font-semibold text-4xl">GitHub</h4>
            <p className="text-[#003366]/80 text-lg font-manrope leading-relaxed">
              Lorem ipsum dolor sit amet, <br />consetetur sadipscing elitr, <br />sed diam.
              amet, consetetur.
            </p>
          </div>

          {}
          <div className="space-y-3">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2906/2906274.png"
              alt="MongoDB"
              className="w-20 h-20"
            />
            <h4 className="text-[#ff7a21] font-semibold text-4xl">Mongo DB</h4>
            <p className="text-[#003366]/80 text-lg font-manrope leading-relaxed">
              Lorem ipsum dolor sit amet, <br />consetetur sadipscing elitr,<br /> sed diam.
              amet, consetetur.
            </p>
          </div>

          {/* PostgreSQL */}
          <div className="space-y-3">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968342.png"
              alt="PostgreSQL"
              className="w-20 h-20"
            />
            <h4 className="text-[#ff7a21] font-semibold text-4xl">Postgre SQL</h4>
            <p className="text-[#003366]/80 text-lg font-manrope leading-relaxed">
              Lorem ipsum dolor sit amet, <br />consetetur sadipscing elitr, <br />sed diam.
              amet, consetetur.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="w-full flex justify-center py-5 ">
      <div className="max-w-10xl w-full  p-5 rounded-sm bg-white">
        {/* Title */}
        <h2 className="text-6xl font-manrope text-[#2675c5] mb-15">Data Analytics</h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Elastic */}
          <div className="space-y-3">
            <img
              src="https://www.vectorlogo.zone/logos/elastic/elastic-icon.svg"
              alt="Elastic"
              className="w-20 h-20"
            />
            <h4 className="text-[#ff7a21] font-semibold text-4xl">Elastic</h4>
            <p className="text-[#003366]/80 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, <br />consetetur sadipscing elitr,<br /> sed diam.
              amet, consetetur.
            </p>
          </div>

          {/* Cassandra */}
          <div className="space-y-3">
            <img
              src="https://www.vectorlogo.zone/logos/apache_cassandra/apache_cassandra-icon.svg"
              alt="DataStax Cassandra"
              className="w-20 h-20"
            />
            <h4 className="text-[#ff7a21] font-semibold text-4xl">DataStax Cassandra</h4>
            <p className="text-[#003366]/80 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, <br />consetetur sadipscing elitr,<br /> sed diam.
              amet, consetetur.
            </p>
          </div>

          {/* Redis */}
          <div className="space-y-3">
            <img
              src="https://www.vectorlogo.zone/logos/redis/redis-icon.svg"
              alt="Redis"
              className="w-20 h-20"
            />
            <h4 className="text-[#ff7a21] font-semibold text-4xl">Redis</h4>
            <p className="text-[#003366]/80 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, <br />consetetur sadipscing elitr,<br /> sed diam.
              amet, consetetur.
            </p>
          </div>
        </div>
      </div>

    </section>
    <section className="w-full flex justify-center py-5">
      <div className="max-w-10xl w-full  p-5 rounded-sm bg-white">
        {/* Title */}
        <h2 className="text-6xl font-manrope text-[#2274c6] mb-15">Technology</h2>
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 ">
          {/* HashiCorp */}
          <div className="space-y-3">
            <img
              src="https://www.vectorlogo.zone/logos/hashicorp/hashicorp-icon.svg"
              alt="Elastic"
              className="w-20 h-20"
            />
            <h4 className="text-[#ff7a21] font-semibold text-4xl">HachiCorp</h4>
            <p className="text-[#003366]/80 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, <br />consetetur sadipscing elitr,<br /> sed diam.
              Amet, consetetur.
             
            </p>
          </div>
          {/* Cassandra */}
          <div className="space-y-3">
            <img
              src="data:image/png;base64,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"
              alt="Harness"
              className="w-20 h-20"
            />

            <h4 className="text-[#ff7a21] font-semibold text-4xl">Harness</h4>

            <p className="text-[#003366]/80 text-lg leading-relaxed">

              Lorem ipsum dolor sit amet,<br /> consetetur sadipscing elitr, <br />sed diam.

              Amet, consetetur.

  

            </p>

          </div>

          {/* Apache Kafka */}

          <div className="space-y-3">

            <img

              src="https://www.vectorlogo.zone/logos/apache_kafka/apache_kafka-icon.svg"

              alt="Redis"

              className="w-20 h-20"

            />

            <h4 className="text-[#ff7a21] font-semibold text-4xl">Apache Kafka</h4>

            <p className="text-[#003366]/80 text-lg leading-relaxed">

              Lorem ipsum dolor sit amet,<br /> consetetur sadipscing elitr, <br />sed diam.

              Amet, consetetur.

              
            </p>

          </div>

        </div>

      </div>

    </section>

  


    </>
  );
}
