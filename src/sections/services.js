/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import { rgba } from 'polished';
import SectionHeading from 'components/section-heading';
import Service from 'components/cards/service';
import icon1 from 'assets/images/icons/service1.png';
import icon2 from 'assets/images/icons/service2.png';
import icon3 from 'assets/images/icons/service3.png';

const data = [
  {
    id: 1,
    icon: icon1,
    title: 'IEEE Mission',
    description: `The IEEE promotes the engineering process of creating, developing, integrating, sharing, and applying knowledge about electro and information technologies and sciences for the benefit of humanity and the profession.`,
  },
  {
    id: 3,
    icon: icon2,
    title: 'IEEE Vision',
    description: `To advance global prosperity by fostering technological innovation, enabling members' careers and promoting community world-wide.`,
  },
  {
    id: 4,
    icon: icon3,
    title: 'IEEE DEIS Mission',
    description: `The objectives of the Society are technical, scientific, literary, and educational. DEIS strives for the advancement of the theory and practice of electrical and electronics engineering and the related arts and sciences, in consonance with the Constitution and Bylaws of the IEEE. DEIS provides special attention to the technical areas within its field of interest as follows:
    The field of interest of the IEEE Dielectrics and Electrical Insulation Society shall be the study and application of dielectric phenomena and behavior and the development, characterization and application of all gaseous, liquid and solid electrical insulating materials and systems utilized in electrical and electronic equipment. DEIS is also involved in the creation of voluntary engineering standards and the recommended practices related thereto.
    DEIS promotes the close cooperation and exchange of technical information among its members and to this end holds meetings for the presentation of papers and their discussion. Through committees DEIS stimulates research, develops appropriate studies and standards, and sponsor periodic and special publications in the field of dielectrics and electrical insulation.`,
  },
];

const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="IEEE Dielectrics & Electrical Insulation Society"
          description="The Institute of Electrical and Electronics Engineers, Inc. (IEEE) is the world's leading professional association for the advancement of technology. Today, the organization's scope of interest has expanded into so many related fields that it is simply referred to by the letters I-E-E-E (pronounced eye-triple-E).

          IEEE is organized into 39 societies and 5 technical councils representing the wide range of technical interests. DEIS is the Dielectrics and Electrical Insulation Society whose field of interest includes the study and application of dielectrics from the molecular level, through nano-structured materials, to insulation systems in industrial, commercial, and power system equipment, to emerging applications such as those at high power levels and in biological and other small-scale systems. DEIS supports the entire scope of this field from advancing the basic science, to enhancing the ability of practicing engineers to use emerging dielectric materials, to the development of standards for the prudent application of existing and new insulation systems
          "
        />

        <hr />
        <br />

        <Box sx={styles.contentWrapper}>
          {data?.map((item) => (
            <Service key={item.id} item={item} />
          ))}
          <br/>
          <br/>
        </Box>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  section: {
    backgroundColor: rgba('#FFF5ED', 0.5),
    pt: [11, 11, 11, 12, 12, 12, 14],
    pb: [7, 7, 7, 9, 9, 10, 11],
  },
  heading: {
    maxWidth: [null, null, null, 1455, 1660],
    mb: [6, null, null, 8, null, 9, 13],
  },
  contentWrapper: {
    gap: 30,
    display: 'grid',
    justifyContent: ['center', null, null, 'unset'],
    gridTemplateColumns: [
      // 'repeat(1, 285px)',
      'repeat(1, 325px)',
      'repeat(1, 285px)',
      'repeat(1, 1fr)',
    ],
  },
};
