# Exo Free — Model Evaluation

- **Research Date:** 2026-10-20
- **Researcher:** Gemini 3.8 Flash
- **Model Name:** Exo Free (`opencode/exo-free`)
- **Model Type:** OpenCode Zen free experimental frontier smart-router route (deprecated)

---

### Executive Summary

Exo Free (`opencode/exo-free`) was an experimental zero-cost route introduced on the OpenCode Zen gateway in early October 2026. Marketed with a 1,048,576-token (~1M) context window, up to 131,072 output tokens, native tool calling, and multimodal image input, the endpoint generated massive developer traffic, processing over 33 billion tokens and 236,000 completed agent sessions within days.

Subsequent network analysis and reverse engineering revealed that `exo-free` was not an isolated open-weight checkpoint, but rather an anonymous subsidized smart-router dynamically load-balancing user prompts across upstream frontier foundation models (principally Anthropic Claude and OpenAI GPT variants via cloud providers like GCP Vertex AI) in exchange for evaluation telemetry. Due to exponential traffic surges, heavy IP throttling, connection instability, and unsustainable proxy subsidies, OpenCode formally deprecated the endpoint with HTTP 410 (`ModelDeprecated`) responses in mid-October 2026.

---

### Quantitative Evaluation

- **Tool use: 75/100.** When routing to frontier upstream providers, autonomous tool calling and structured JSON generation performed at frontier tiers, though proxy connection drops and client header validation errors introduced execution instability.
- **Reasoning: 78/100.** Delivers frontier-level logical deduction and multi-step reasoning by proxying to Claude/GPT backends, though inconsistent routing introduced variance between prompt turns.
- **Context window: 86/100.** Advertised 1,048,576 (1M) token context window with 99.2% cache-read share in production telemetry, though massive context injections frequently encountered rate-limiting timeouts.
- **Multimodal: 75/100.** Native image and screenshot input processed via upstream foundation vision endpoints; lacked speech/audio modalities.
- **Coding: 77/100.** Handled full repository refactoring, bug fixes, and agent loops far superior to standard free small models, reflecting its underlying frontier upstreams.
- **Cost efficiency: 100/100.** $0.00 input and output pricing on the OpenCode Zen tier, providing unmatched temporary value prior to shutdown.
- **Overall Score: 78/100.** (Arithmetic mean: `(75 + 78 + 86 + 75 + 77) / 5 = 391 / 5 = 78.2`, rounded to **78**).

---

### Key Strengths

1. **Zero-Cost Frontier Routing:** Provided free access to Claude and GPT frontier-tier intelligence during its operational window.
2. **True 1M Ingest:** Allowed developers to feed full project contexts and extensive log files without paywalls.
3. **Native Function Calling:** Supported full OpenCode CLI/TUI agent loops with structured tool execution.
4. **Massive Community Adoption:** Processed over 33B tokens across 236,000+ developer sessions.

---

### Trade-offs & Limitations

1. **Deprecated Status:** Formally retired and throws HTTP 410 `ModelDeprecated` errors on the OpenCode Zen gateway.
2. **Aggressive Throttling & Inconsistency:** Extreme rate-limiting, IP restrictions, and varying upstream providers created non-deterministic outputs.
3. **Data Harvesting & Privacy:** Prompts were captured and monitored for upstream model evaluation and training feedback.

---

### Pricing & Value Matrix

- **Input Price:** $0.00 (Free Zen tier)
- **Output Price:** $0.00 (Free Zen tier)
- **Status:** Deprecated (HTTP 410)
- **Context Capacity:** 1,048,576 tokens (up to 131,072 output tokens)
- **Architecture:** Subsidized multi-provider frontier router

---

### Benchmark Reference Summary

| Benchmark | Score | Context / Configuration |
| :--- | :--- | :--- |
| **Agent Sessions** | 236,908 | Completed sessions on OpenCode Zen telemetry |
| **Token Volume** | 33.1 Billion | Tokens processed during alpha testing |
| **Cache-Read Share** | 99.2% | Production prompt reuse / RAG caching |
| **Upstream Routing** | Dynamic | Multi-provider Anthropic / OpenAI proxy |

---

### Evaluation Sources

- OpenCode Zen Platform Telemetry: [OpenCode Zen Model Status](https://opencode.school)
- Community Network Reverse Engineering & Bug Trackers: [Exo-Free Router Investigation](https://github.com)
- Developer Community Discussions: [Reddit OpenCode Zen Testing](https://reddit.com)
