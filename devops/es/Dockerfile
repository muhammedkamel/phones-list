FROM docker.elastic.co/elasticsearch/elasticsearch:7.12.0

RUN bin/elasticsearch-certutil ca --pass ''
RUN bin/elasticsearch-certutil cert --ca elastic-stack-ca.p12 --pass ''

ENV discovery.type=single-node
ENV node.name=es01
ENV cluster.name=es-docker-cluster
ENV logger.level=DEBUG
ENV bootstrap.memory_lock=true
ENV xpack.security.transport.ssl.enabled=true
ENV xpack.security.transport.ssl.verification_mode=certificate
ENV xpack.security.transport.ssl.keystore.path=elastic-certificates.p12
ENV xpack.security.transport.ssl.truststore.path=elastic-certificates.p12
ENV ES_JAVA_OPTS="-Xms512m -Xmx512m"

EXPOSE 9200
EXPOSE 9300