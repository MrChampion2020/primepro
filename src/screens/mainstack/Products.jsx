
import React, { useState } from 'react';
import Navbar, { NAVBAR_HEIGHT } from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';

// Real product data, 10 for each category
const productData = [
  // Oil & Gas
  {
    name: 'API 5L Seamless Steel Pipe',
    description: 'High-strength seamless steel pipes for oil and gas transmission, meeting API 5L standards.',
    category: 'Oil & Gas',
    image: require('../../assets/ball.png'),
  },
  {
    name: 'Wellhead Christmas Tree',
    description: 'Advanced wellhead equipment for pressure control and safe oil extraction.',
    category: 'Oil & Gas',
    image: require('../../assets/wellhead.jpg'),
  },
  {
    name: 'Subsea Control Valve',
    description: 'Corrosion-resistant valves for subsea oil and gas operations.',
    category: 'Oil & Gas',
    image: require('../../assets/valve.jpg'),
  },
  {
    name: 'Downhole Tubing',
    description: 'Premium tubing for downhole applications in oil wells.',
    category: 'Oil & Gas',
    image: require('../../assets/oil.jpeg'),
  },
  {
    name: 'Gas Lift Mandrel',
    description: 'Mandrels for gas lift systems, improving oil recovery efficiency.',
    category: 'Oil & Gas',
    image: require('../../assets/gas.jpg'),
  },
  {
    name: 'Pipeline Gasket',
    description: 'High-pressure gaskets for pipeline sealing in oil and gas transport.',
    category: 'Oil & Gas',
    image: require('../../assets/gasket.jpg'),
  },
  {
    name: 'Rotary Drill Bit',
    description: 'Durable drill bits for oilfield drilling operations.',
    category: 'Oil & Gas',
    image: require('../../assets/bolt.jpg'),
  },
  {
    name: 'Production Tubing Hanger',
    description: 'Tubing hangers for secure suspension of production tubing in wells.',
    category: 'Oil & Gas',
    image: require('../../assets/heritage.png'),
  },
  {
    name: 'Mud Pump',
    description: 'Heavy-duty mud pumps for drilling fluid circulation.',
    category: 'Oil & Gas',
    image: require('../../assets/service1.jpg'),
  },
  {
    name: 'Casing Centralizer',
    description: 'Centralizers for proper casing placement in oil wells.',
    category: 'Oil & Gas',
    image: require('../../assets/service2.jpeg'),
  },
  // Industrial
  {
    name: 'Stainless Steel Flange',
    description: 'Precision flanges for industrial piping systems.',
    category: 'Industrial',
    image: require('../../assets/stainless.jpg'),
  },
  {
    name: 'Industrial Ball Valve',
    description: 'Reliable ball valves for flow control in industrial processes.',
    category: 'Industrial',
    image: require('../../assets/valves.jpg'),
  },
  {
    name: 'Electric Motor',
    description: 'High-efficiency electric motors for industrial machinery.',
    category: 'Industrial',
    image: require('../../assets/service3.jpg'),
  },
  {
    name: 'Gearbox Assembly',
    description: 'Heavy-duty gearboxes for power transmission applications.',
    category: 'Industrial',
    image: require('../../assets/service4.jpeg'),
  },
  {
    name: 'Industrial Cable',
    description: 'Durable cables for power and signal transmission in factories.',
    category: 'Industrial',
    image: require('../../assets/cable.jpg'),
  },
  {
    name: 'Hydraulic Pump',
    description: 'Robust hydraulic pumps for industrial automation.',
    category: 'Industrial',
    image: require('../../assets/service5.jpeg'),
  },
  {
    name: 'Pneumatic Actuator',
    description: 'Actuators for precise control in industrial systems.',
    category: 'Industrial',
    image: require('../../assets/service6.jpeg'),
  },
  {
    name: 'Industrial Fasteners',
    description: 'Assorted fasteners for assembly and maintenance.',
    category: 'Industrial',
    image: require('../../assets/screws.jpg'),
  },
  {
    name: 'Heat Exchanger',
    description: 'Efficient heat exchangers for process industries.',
    category: 'Industrial',
    image: require('../../assets/item.jpg'),
  },
  {
    name: 'Pressure Gauge',
    description: 'Accurate gauges for monitoring industrial processes.',
    category: 'Industrial',
    image: require('../../assets/profile.png'),
  },
  // Automotive
  {
    name: 'Automotive Spark Plug',
    description: 'High-performance spark plugs for gasoline engines.',
    category: 'Automotive',
    image: require('../../assets/default.png'),
  },
  {
    name: 'Brake Pad Set',
    description: 'Durable brake pads for safe vehicle stopping.',
    category: 'Automotive',
    image: require('../../assets/service2.jpeg'),
  },
  {
    name: 'Fuel Injector',
    description: 'Precision fuel injectors for efficient combustion.',
    category: 'Automotive',
    image: require('../../assets/service3.jpg'),
  },
  {
    name: 'Car Battery',
    description: 'Long-lasting batteries for automotive applications.',
    category: 'Automotive',
    image: require('../../assets/service4.jpeg'),
  },
  {
    name: 'Radiator Hose',
    description: 'Flexible hoses for vehicle cooling systems.',
    category: 'Automotive',
    image: require('../../assets/service5.jpeg'),
  },
  {
    name: 'Shock Absorber',
    description: 'Quality shock absorbers for smooth rides.',
    category: 'Automotive',
    image: require('../../assets/service6.jpeg'),
  },
  {
    name: 'Timing Belt',
    description: 'Reliable timing belts for engine synchronization.',
    category: 'Automotive',
    image: require('../../assets/bolt.jpg'),
  },
  {
    name: 'Automotive Oil Filter',
    description: 'Efficient oil filters for engine protection.',
    category: 'Automotive',
    image: require('../../assets/oil.jpeg'),
  },
  {
    name: 'Headlight Bulb',
    description: 'Bright and durable bulbs for vehicle headlights.',
    category: 'Automotive',
    image: require('../../assets/heritage.png'),
  },
  {
    name: 'Windshield Wiper Blade',
    description: 'High-quality wiper blades for clear visibility.',
    category: 'Automotive',
    image: require('../../assets/chevron.png'),
  },
  // Power & Energy
  {
    name: 'Solar Panel Array',
    description: 'High-efficiency solar panels for renewable energy generation.',
    category: 'Power & Energy',
    image: require('../../assets/service1.jpg'),
  },
  {
    name: 'Wind Turbine Gearbox',
    description: 'Robust gearboxes for wind energy conversion systems.',
    category: 'Power & Energy',
    image: require('../../assets/service2.jpeg'),
  },
  {
    name: 'Transformer Unit',
    description: 'Electrical transformers for power distribution networks.',
    category: 'Power & Energy',
    image: require('../../assets/service3.jpg'),
  },
  {
    name: 'Circuit Breaker',
    description: 'High-voltage circuit breakers for electrical protection.',
    category: 'Power & Energy',
    image: require('../../assets/service4.jpeg'),
  },
  {
    name: 'Generator Set',
    description: 'Diesel generators for backup power supply.',
    category: 'Power & Energy',
    image: require('../../assets/service5.jpeg'),
  },
  {
    name: 'Battery Bank',
    description: 'Energy storage systems for renewable power integration.',
    category: 'Power & Energy',
    image: require('../../assets/service6.jpeg'),
  },
  {
    name: 'Power Cable',
    description: 'High-capacity cables for electrical transmission.',
    category: 'Power & Energy',
    image: require('../../assets/cable.jpg'),
  },
  {
    name: 'Switchgear Panel',
    description: 'Electrical switchgear for power control and distribution.',
    category: 'Power & Energy',
    image: require('../../assets/bolt.jpg'),
  },
  {
    name: 'Inverter System',
    description: 'Solar inverters for DC to AC power conversion.',
    category: 'Power & Energy',
    image: require('../../assets/oil.jpeg'),
  },
  {
    name: 'Power Factor Capacitor',
    description: 'Capacitors for power factor correction in electrical systems.',
    category: 'Power & Energy',
    image: require('../../assets/heritage.png'),
  },
  // Construction
  {
    name: 'Excavator Bucket',
    description: 'Heavy-duty buckets for construction excavation.',
    category: 'Construction',
    image: require('../../assets/chevron.png'),
  },
  {
    name: 'Concrete Mixer',
    description: 'Mobile concrete mixers for construction sites.',
    category: 'Construction',
    image: require('../../assets/service1.jpg'),
  },
  {
    name: 'Steel Beam',
    description: 'Structural steel beams for building construction.',
    category: 'Construction',
    image: require('../../assets/stainless.jpg'),
  },
  {
    name: 'Crane Hook Block',
    description: 'Lifting equipment for construction material handling.',
    category: 'Construction',
    image: require('../../assets/service2.jpeg'),
  },
  {
    name: 'Scaffolding System',
    description: 'Modular scaffolding for construction access.',
    category: 'Construction',
    image: require('../../assets/service3.jpg'),
  },
  {
    name: 'Pile Driver',
    description: 'Foundation equipment for deep pile installation.',
    category: 'Construction',
    image: require('../../assets/service4.jpeg'),
  },
  {
    name: 'Asphalt Paver',
    description: 'Road construction equipment for asphalt laying.',
    category: 'Construction',
    image: require('../../assets/service5.jpeg'),
  },
  {
    name: 'Rebar Cutter',
    description: 'Reinforcement bar cutting equipment for concrete work.',
    category: 'Construction',
    image: require('../../assets/service6.jpeg'),
  },
  {
    name: 'Welding Machine',
    description: 'Portable welding equipment for construction sites.',
    category: 'Construction',
    image: require('../../assets/cable.jpg'),
  },
  {
    name: 'Safety Harness',
    description: 'Fall protection equipment for construction workers.',
    category: 'Construction',
    image: require('../../assets/profile.png'),
  },
  // Mining
  {
    name: 'Mining Drill Bit',
    description: 'Diamond-tipped drill bits for hard rock mining.',
    category: 'Mining',
    image: require('../../assets/bolt.jpg'),
  },
  {
    name: 'Conveyor Belt System',
    description: 'Bulk material handling systems for mining operations.',
    category: 'Mining',
    image: require('../../assets/cable.jpg'),
  },
  {
    name: 'Crusher Machine',
    description: 'Rock crushing equipment for mineral processing.',
    category: 'Mining',
    image: require('../../assets/service1.jpg'),
  },
  {
    name: 'Mining Truck',
    description: 'Heavy-duty trucks for ore transportation.',
    category: 'Mining',
    image: require('../../assets/service2.jpeg'),
  },
  {
    name: 'Ventilation Fan',
    description: 'Industrial fans for mine ventilation systems.',
    category: 'Mining',
    image: require('../../assets/service3.jpg'),
  },
  {
    name: 'Mining Shovel',
    description: 'Electric shovels for large-scale excavation.',
    category: 'Mining',
    image: require('../../assets/service4.jpeg'),
  },
  {
    name: 'Ball Mill',
    description: 'Grinding mills for ore processing and refinement.',
    category: 'Mining',
    image: require('../../assets/service5.jpeg'),
  },
  {
    name: 'Mining Pump',
    description: 'Submersible pumps for mine dewatering.',
    category: 'Mining',
    image: require('../../assets/service6.jpeg'),
  },
  {
    name: 'Mining Light',
    description: 'Explosion-proof lighting for underground mining.',
    category: 'Mining',
    image: require('../../assets/heritage.png'),
  },
  {
    name: 'Mining Sensor',
    description: 'Gas detection sensors for mine safety monitoring.',
    category: 'Mining',
    image: require('../../assets/chevron.png'),
  },
  // Marine & Offshore
  {
    name: 'Marine Propeller',
    description: 'High-performance propellers for marine vessels.',
    category: 'Marine & Offshore',
    image: require('../../assets/service1.jpg'),
  },
  {
    name: 'Offshore Platform',
    description: 'Modular platforms for offshore oil and gas operations.',
    category: 'Marine & Offshore',
    image: require('../../assets/service2.jpeg'),
  },
  {
    name: 'Marine Engine',
    description: 'Diesel engines for marine propulsion systems.',
    category: 'Marine & Offshore',
    image: require('../../assets/service3.jpg'),
  },
  {
    name: 'Anchor Chain',
    description: 'Heavy-duty anchor chains for vessel mooring.',
    category: 'Marine & Offshore',
    image: require('../../assets/service4.jpeg'),
  },
  {
    name: 'Marine Compass',
    description: 'Navigation compasses for marine vessels.',
    category: 'Marine & Offshore',
    image: require('../../assets/service5.jpeg'),
  },
  {
    name: 'Offshore Crane',
    description: 'Heavy-lift cranes for offshore construction.',
    category: 'Marine & Offshore',
    image: require('../../assets/service6.jpeg'),
  },
  {
    name: 'Marine Valve',
    description: 'Corrosion-resistant valves for marine applications.',
    category: 'Marine & Offshore',
    image: require('../../assets/valve.jpg'),
  },
  {
    name: 'Subsea Cable',
    description: 'Underwater cables for offshore power transmission.',
    category: 'Marine & Offshore',
    image: require('../../assets/cable.jpg'),
  },
  {
    name: 'Marine Pump',
    description: 'Bilge pumps for vessel water management.',
    category: 'Marine & Offshore',
    image: require('../../assets/oil.jpeg'),
  },
  {
    name: 'Offshore Safety Equipment',
    description: 'Safety gear for offshore personnel protection.',
    category: 'Marine & Offshore',
    image: require('../../assets/profile.png'),
  },
  // Agriculture
  {
    name: 'Tractor Engine',
    description: 'High-performance engines for agricultural machinery.',
    category: 'Agriculture',
    image: require('../../assets/service1.jpg'),
  },
  {
    name: 'Irrigation Pump',
    description: 'Water pumps for agricultural irrigation systems.',
    category: 'Agriculture',
    image: require('../../assets/service2.jpeg'),
  },
  {
    name: 'Harvester Blade',
    description: 'Sharp blades for crop harvesting equipment.',
    category: 'Agriculture',
    image: require('../../assets/service3.jpg'),
  },
  {
    name: 'Grain Storage Silo',
    description: 'Storage systems for agricultural grain preservation.',
    category: 'Agriculture',
    image: require('../../assets/service4.jpeg'),
  },
  {
    name: 'Fertilizer Spreader',
    description: 'Equipment for precise fertilizer application.',
    category: 'Agriculture',
    image: require('../../assets/service5.jpeg'),
  },
  {
    name: 'Seed Drill',
    description: 'Precision seed planting equipment for farms.',
    category: 'Agriculture',
    image: require('../../assets/service6.jpeg'),
  },
  {
    name: 'Greenhouse System',
    description: 'Climate control systems for greenhouse farming.',
    category: 'Agriculture',
    image: require('../../assets/cable.jpg'),
  },
  {
    name: 'Livestock Feed Mixer',
    description: 'Feed mixing equipment for animal nutrition.',
    category: 'Agriculture',
    image: require('../../assets/bolt.jpg'),
  },
  {
    name: 'Dairy Processing Unit',
    description: 'Equipment for dairy product processing.',
    category: 'Agriculture',
    image: require('../../assets/oil.jpeg'),
  },
  {
    name: 'Poultry Incubator',
    description: 'Temperature-controlled incubators for poultry farming.',
    category: 'Agriculture',
    image: require('../../assets/heritage.png'),
  },
  // Healthcare
  {
    name: 'Medical Imaging System',
    description: 'Advanced imaging equipment for medical diagnostics.',
    category: 'Healthcare',
    image: require('../../assets/service1.jpg'),
  },
  {
    name: 'Surgical Instrument Set',
    description: 'Precision surgical tools for medical procedures.',
    category: 'Healthcare',
    image: require('../../assets/service2.jpeg'),
  },
  {
    name: 'Patient Monitor',
    description: 'Vital signs monitoring equipment for healthcare facilities.',
    category: 'Healthcare',
    image: require('../../assets/service3.jpg'),
  },
  {
    name: 'Laboratory Centrifuge',
    description: 'High-speed centrifuges for medical testing.',
    category: 'Healthcare',
    image: require('../../assets/service4.jpeg'),
  },
  {
    name: 'Dental Chair',
    description: 'Ergonomic dental chairs for patient comfort.',
    category: 'Healthcare',
    image: require('../../assets/service5.jpeg'),
  },
  {
    name: 'Ventilator System',
    description: 'Respiratory support equipment for critical care.',
    category: 'Healthcare',
    image: require('../../assets/service6.jpeg'),
  },
  {
    name: 'Sterilization Autoclave',
    description: 'Medical equipment sterilization systems.',
    category: 'Healthcare',
    image: require('../../assets/cable.jpg'),
  },
  {
    name: 'Pharmaceutical Mixer',
    description: 'Equipment for pharmaceutical manufacturing.',
    category: 'Healthcare',
    image: require('../../assets/bolt.jpg'),
  },
  {
    name: 'Medical Refrigerator',
    description: 'Temperature-controlled storage for medical supplies.',
    category: 'Healthcare',
    image: require('../../assets/oil.jpeg'),
  },
  {
    name: 'Ambulance Equipment',
    description: 'Emergency medical equipment for ambulances.',
    category: 'Healthcare',
    image: require('../../assets/heritage.png'),
  },
  // Telecommunications
  {
    name: 'Fiber Optic Cable',
    description: 'High-speed data transmission cables for telecom networks.',
    category: 'Telecommunications',
    image: require('../../assets/cable.jpg'),
  },
  {
    name: 'Cell Tower Equipment',
    description: 'Base station equipment for mobile communications.',
    category: 'Telecommunications',
    image: require('../../assets/service1.jpg'),
  },
  {
    name: 'Satellite Dish',
    description: 'Satellite communication equipment for remote areas.',
    category: 'Telecommunications',
    image: require('../../assets/service2.jpeg'),
  },
  {
    name: 'Network Switch',
    description: 'Data switching equipment for network infrastructure.',
    category: 'Telecommunications',
    image: require('../../assets/service3.jpg'),
  },
  {
    name: 'Antenna Array',
    description: 'Multi-element antennas for signal transmission.',
    category: 'Telecommunications',
    image: require('../../assets/service4.jpeg'),
  },
  {
    name: 'Optical Amplifier',
    description: 'Signal amplification equipment for fiber networks.',
    category: 'Telecommunications',
    image: require('../../assets/service5.jpeg'),
  },
  {
    name: 'Microwave Radio',
    description: 'Point-to-point microwave communication systems.',
    category: 'Telecommunications',
    image: require('../../assets/service6.jpeg'),
  },
  {
    name: 'Telecom Power Supply',
    description: 'Uninterruptible power supplies for telecom equipment.',
    category: 'Telecommunications',
    image: require('../../assets/bolt.jpg'),
  },
  {
    name: 'Cable Tester',
    description: 'Testing equipment for telecom cable verification.',
    category: 'Telecommunications',
    image: require('../../assets/oil.jpeg'),
  },
  {
    name: 'Network Router',
    description: 'High-capacity routers for internet traffic management.',
    category: 'Telecommunications',
    image: require('../../assets/heritage.png'),
  },
  // Aerospace
  {
    name: 'Aircraft Engine',
    description: 'Jet engines for commercial and military aircraft.',
    category: 'Aerospace',
    image: require('../../assets/service1.jpg'),
  },
  {
    name: 'Avionics System',
    description: 'Electronic systems for aircraft navigation and control.',
    category: 'Aerospace',
    image: require('../../assets/service2.jpeg'),
  },
  {
    name: 'Landing Gear',
    description: 'Aircraft landing and takeoff equipment.',
    category: 'Aerospace',
    image: require('../../assets/service3.jpg'),
  },
  {
    name: 'Satellite Component',
    description: 'Components for satellite communication systems.',
    category: 'Aerospace',
    image: require('../../assets/service4.jpeg'),
  },
  {
    name: 'Aircraft Seat',
    description: 'Passenger seating systems for commercial aircraft.',
    category: 'Aerospace',
    image: require('../../assets/service5.jpeg'),
  },
  {
    name: 'Flight Control System',
    description: 'Aircraft flight control and stabilization equipment.',
    category: 'Aerospace',
    image: require('../../assets/service6.jpeg'),
  },
  {
    name: 'Aircraft Tire',
    description: 'High-performance tires for aircraft operations.',
    category: 'Aerospace',
    image: require('../../assets/cable.jpg'),
  },
  {
    name: 'Fuel Tank System',
    description: 'Aircraft fuel storage and distribution systems.',
    category: 'Aerospace',
    image: require('../../assets/bolt.jpg'),
  },
  {
    name: 'Cabin Pressurization',
    description: 'Cabin pressure control systems for aircraft.',
    category: 'Aerospace',
    image: require('../../assets/oil.jpeg'),
  },
  {
    name: 'Aircraft Lighting',
    description: 'Interior and exterior lighting for aircraft.',
    category: 'Aerospace',
    image: require('../../assets/heritage.png'),
  },
  // Water Treatment
  {
    name: 'Water Filtration System',
    description: 'Advanced filtration systems for water purification.',
    category: 'Water Treatment',
    image: require('../../assets/service1.jpg'),
  },
  {
    name: 'Reverse Osmosis Unit',
    description: 'RO systems for desalination and water treatment.',
    category: 'Water Treatment',
    image: require('../../assets/service2.jpeg'),
  },
  {
    name: 'UV Sterilizer',
    description: 'Ultraviolet sterilization equipment for water treatment.',
    category: 'Water Treatment',
    image: require('../../assets/service3.jpg'),
  },
  {
    name: 'Chemical Dosing Pump',
    description: 'Precision pumps for chemical treatment in water systems.',
    category: 'Water Treatment',
    image: require('../../assets/service4.jpeg'),
  },
  {
    name: 'Sewage Treatment Plant',
    description: 'Complete wastewater treatment systems.',
    category: 'Water Treatment',
    image: require('../../assets/service5.jpeg'),
  },
  {
    name: 'Water Quality Analyzer',
    description: 'Analytical equipment for water quality monitoring.',
    category: 'Water Treatment',
    image: require('../../assets/service6.jpeg'),
  },
  {
    name: 'Sludge Dewatering Press',
    description: 'Equipment for sludge treatment and dewatering.',
    category: 'Water Treatment',
    image: require('../../assets/cable.jpg'),
  },
  {
    name: 'Membrane Bioreactor',
    description: 'MBR systems for advanced wastewater treatment.',
    category: 'Water Treatment',
    image: require('../../assets/bolt.jpg'),
  },
  {
    name: 'Chlorination System',
    description: 'Chlorine dosing systems for water disinfection.',
    category: 'Water Treatment',
    image: require('../../assets/oil.jpeg'),
  },
  {
    name: 'Water Storage Tank',
    description: 'Large capacity storage tanks for treated water.',
    category: 'Water Treatment',
    image: require('../../assets/heritage.png'),
  },
  // Food & Beverage
  {
    name: 'Industrial Mixer',
    description: 'Large-scale mixers for food processing operations.',
    category: 'Food & Beverage',
    image: require('../../assets/service1.jpg'),
  },
  {
    name: 'Pasteurization Unit',
    description: 'Heat treatment equipment for food safety.',
    category: 'Food & Beverage',
    image: require('../../assets/service2.jpeg'),
  },
  {
    name: 'Packaging Machine',
    description: 'Automated packaging equipment for food products.',
    category: 'Food & Beverage',
    image: require('../../assets/service3.jpg'),
  },
  {
    name: 'Refrigeration System',
    description: 'Industrial cooling systems for food storage.',
    category: 'Food & Beverage',
    image: require('../../assets/service4.jpeg'),
  },
  {
    name: 'Conveyor Belt',
    description: 'Food-grade conveyor systems for production lines.',
    category: 'Food & Beverage',
    image: require('../../assets/service5.jpeg'),
  },
  {
    name: 'Bottling Line',
    description: 'Complete bottling systems for beverages.',
    category: 'Food & Beverage',
    image: require('../../assets/service6.jpeg'),
  },
  {
    name: 'Quality Control Scanner',
    description: 'Vision systems for food quality inspection.',
    category: 'Food & Beverage',
    image: require('../../assets/cable.jpg'),
  },
  {
    name: 'Industrial Oven',
    description: 'Baking and cooking equipment for food production.',
    category: 'Food & Beverage',
    image: require('../../assets/bolt.jpg'),
  },
  {
    name: 'Extrusion Machine',
    description: 'Food extrusion equipment for snack production.',
    category: 'Food & Beverage',
    image: require('../../assets/oil.jpeg'),
  },
  {
    name: 'Filling Machine',
    description: 'Precision filling equipment for liquid products.',
    category: 'Food & Beverage',
    image: require('../../assets/heritage.png'),
  },
  // Textile & Apparel
  {
    name: 'Spinning Machine',
    description: 'Textile spinning equipment for yarn production.',
    category: 'Textile & Apparel',
    image: require('../../assets/service1.jpg'),
  },
  {
    name: 'Weaving Loom',
    description: 'Industrial looms for fabric manufacturing.',
    category: 'Textile & Apparel',
    image: require('../../assets/service2.jpeg'),
  },
  {
    name: 'Dyeing Machine',
    description: 'Textile dyeing equipment for color application.',
    category: 'Textile & Apparel',
    image: require('../../assets/service3.jpg'),
  },
  {
    name: 'Sewing Machine',
    description: 'Industrial sewing equipment for garment production.',
    category: 'Textile & Apparel',
    image: require('../../assets/service4.jpeg'),
  },
  {
    name: 'Fabric Finishing Unit',
    description: 'Equipment for fabric treatment and finishing.',
    category: 'Textile & Apparel',
    image: require('../../assets/service5.jpeg'),
  },
  {
    name: 'Knitting Machine',
    description: 'Circular and flat knitting machines for fabric production.',
    category: 'Textile & Apparel',
    image: require('../../assets/service6.jpeg'),
  },
  {
    name: 'Embroidery Machine',
    description: 'Computerized embroidery equipment for design application.',
    category: 'Textile & Apparel',
    image: require('../../assets/cable.jpg'),
  },
  {
    name: 'Fabric Inspection System',
    description: 'Quality control equipment for textile inspection.',
    category: 'Textile & Apparel',
    image: require('../../assets/bolt.jpg'),
  },
  {
    name: 'Textile Printing Machine',
    description: 'Digital and screen printing equipment for fabrics.',
    category: 'Textile & Apparel',
    image: require('../../assets/oil.jpeg'),
  },
  {
    name: 'Garment Pressing Unit',
    description: 'Steam pressing equipment for garment finishing.',
    category: 'Textile & Apparel',
    image: require('../../assets/heritage.png'),
  },
  // Electronics
  {
    name: 'PCB Assembly Line',
    description: 'Automated assembly lines for printed circuit boards.',
    category: 'Electronics',
    image: require('../../assets/service1.jpg'),
  },
  {
    name: 'Surface Mount Machine',
    description: 'SMT equipment for electronic component placement.',
    category: 'Electronics',
    image: require('../../assets/service2.jpeg'),
  },
  {
    name: 'Wave Soldering Machine',
    description: 'Soldering equipment for through-hole components.',
    category: 'Electronics',
    image: require('../../assets/service3.jpg'),
  },
  {
    name: 'IC Tester',
    description: 'Testing equipment for integrated circuits.',
    category: 'Electronics',
    image: require('../../assets/service4.jpeg'),
  },
  {
    name: 'Laser Marking System',
    description: 'Laser equipment for component marking and identification.',
    category: 'Electronics',
    image: require('../../assets/service5.jpeg'),
  },
  {
    name: 'Clean Room Equipment',
    description: 'Contamination control equipment for electronics manufacturing.',
    category: 'Electronics',
    image: require('../../assets/service6.jpeg'),
  },
  {
    name: 'Component Feeder',
    description: 'Automated feeders for electronic component handling.',
    category: 'Electronics',
    image: require('../../assets/cable.jpg'),
  },
  {
    name: 'Reflow Oven',
    description: 'Temperature-controlled ovens for SMT reflow soldering.',
    category: 'Electronics',
    image: require('../../assets/bolt.jpg'),
  },
  {
    name: 'X-Ray Inspection System',
    description: 'Quality control equipment for PCB inspection.',
    category: 'Electronics',
    image: require('../../assets/oil.jpeg'),
  },
  {
    name: 'Electronics Workstation',
    description: 'Ergonomic workstations for electronics assembly.',
    category: 'Electronics',
    image: require('../../assets/heritage.png'),
  },
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(productData.map(p => p.category)))];

  const filteredProducts = selectedCategory === 'All'
    ? productData
    : productData.filter(product => product.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%' }}>
      <Navbar />
      <main style={{ flexGrow: 1, marginTop: 20, position: 'relative', zIndex: 2 }}>
        <motion.section
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            position: 'relative',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            minHeight: '60vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            marginTop: 0,
            paddingTop: 0,
            flexDirection: 'column',
            textAlign: 'center',
            borderRadius: '0 0 40px 40px',
          }}
        >
          <h1 style={{ color: 'white', fontSize: 'clamp(32px, 6vw, 64px)', fontWeight: 'bold', marginBottom: 20 }}>Our Products</h1>
          <p style={{ color: 'white', fontSize: 18, maxWidth: 700, margin: '0 auto', opacity: 0.9 }}>
            Explore our range of high-quality products for the oil & gas, industrial, and automotive sectors.
          </p>
        </motion.section>
        <section style={{ padding: '40px 5%', background: '#f8f9fa' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ display: 'flex', gap: 16, marginBottom: 32, flexWrap: 'wrap' }}>
              {categories.map(category => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05, backgroundColor: '#FFA500', color: '#fff' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  style={{
                    padding: '10px 20px',
                    borderRadius: '25px',
                    border: 'none',
                    backgroundColor: selectedCategory === category ? '#667eea' : 'white',
                    color: selectedCategory === category ? 'white' : '#333',
                    cursor: 'pointer',
                    fontWeight: '500',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '32px',
              }}
            >
              {filteredProducts.map((product, idx) => (
                <motion.div
                  key={product.name + idx}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  style={{
                    background: 'white',
                    borderRadius: 15,
                    boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                    padding: 24,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                >
                  {product.image && (
                    <img src={product.image} alt={product.name} style={{ width: 120, height: 120, objectFit: 'cover', borderRadius: 12, marginBottom: 18, boxShadow: '0 2px 8px #0001' }} />
                  )}
                  <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 10 }}>{product.name}</h3>
                  <p style={{ color: '#666', fontSize: 15, marginBottom: 10 }}>{product.description}</p>
                  <span style={{ background: '#e0e7ff', color: '#667eea', borderRadius: 12, padding: '4px 12px', fontSize: 13, fontWeight: 500 }}>{product.category}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
