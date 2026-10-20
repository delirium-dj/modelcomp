# Claude Sonnet 4.6 — Model Evaluation

- **Research Date:** 2026-10-20
- **Researcher:** Gemini 3.8 Flash
- **Model Name:** Claude Sonnet 4.6
- **Model Type:** Frontier-adjacent balanced reasoning, autonomous agentic, and coding workhorse model

---

### Executive Summary

Claude Sonnet 4.6 is Anthropic's mid-tier flagship workhorse released on February 17, 2026, engineered to bring frontier-grade coding, computer automation, and dynamic multi-step problem solving into standard production speed and pricing tiers. Equipped with an expanded 1,000,000-token (1M) context window (in addition to standard 200K base routing), Sonnet 4.6 delivers impressive agentic performance: 79.6% on SWE-bench Verified, 59.1% on Terminal-Bench 2.0, and 72.5% on OSWorld-Verified for cross-application desktop automation.

Retaining the economical $3.00/$15.00 per million token baseline (with prompt cache reads at $0.30 per million tokens and 50% discounts on Batch API requests), Sonnet 4.6 provides an exceptional performance-per-dollar ratio for autonomous development pipelines, complex document and chart extraction, and continuous software engineering tasks. While succeeded in late 2026 by Sonnet 5 and Sonnet 5.5, Sonnet 4.6 remains a widely adopted, high-reliability foundation model across the enterprise ecosystem.

---

### Quantitative Evaluation

- **Tool use: 90/100.** Delivers 59.1% on Terminal-Bench 2.0 and 72.5% on OSWorld-Verified. Highly dependable in executing multi-turn bash commands, system administration tasks, and computer use with robust parameter adherence.
- **Reasoning: 90/100.** Adaptive thinking enables dynamic scaling of internal reasoning tokens based on query complexity. Scores strongly on GPQA and multi-hop logical deductions, often matching previous Opus generations.
- **Context window: 95/100.** Standard 200K context capacity scaling up to 1,000,000 (1M) tokens in beta, supporting deep document stacks, long codebases, and multi-turn agent histories with high retrieval fidelity.
- **Multimodal: 78/100.** Advanced vision and visual reasoning engine tailored for dense financial charts, multi-page PDF documents, scanned forms, and UI screenshots, though lacking real-time audio and native video streaming tokens.
- **Coding: 91/100.** Reaches 79.6% on SWE-bench Verified and strong LiveCodeBench results. Highly proficient at full-stack bug fixes, refactoring, and automated test resolution in tools like Claude Code.
- **Cost efficiency: 86/100.** Outstanding value proposition at $3.00/1M input and $15.00/1M output, dropping to $0.30/1M on prompt cache hits and $1.50/1M on batch processing.
- **Overall Score: 89/100.** (Arithmetic mean: `(90 + 90 + 95 + 78 + 91) / 5 = 444 / 5 = 88.8`, rounded to **89**).

---

### Key Strengths

1. **Desktop & OS Automation:** 72.5% on OSWorld-Verified demonstrates industry-leading computer-use and cross-application UI navigation.
2. **High-Value Coding Benchmark:** 79.6% on SWE-bench Verified offers frontier-tier repository maintenance at mid-tier token prices.
3. **Flexible 1M Context Window:** Expands standard 200K context up to 1,000,000 tokens for comprehensive documentation and multi-repository ingest.
4. **Economical Agentic Pricing:** $3.00/$15.00 base pricing combined with $0.30/1M prompt cache reads makes it highly suitable for high-frequency interactive agents.

---

### Trade-offs & Limitations

1. **Long-Context Pricing Adjustment:** Requests exceeding 200,000 tokens transition to long-context rates ($6.00 input / $22.50 output per million tokens).
2. **Extreme Edge-Case Refactors:** While formidable, subtle distributed race conditions and massive cross-package architectural rewrites benefit from larger Opus-tier models (such as Opus 5 / 5.5).
3. **No Native Speech-to-Speech:** Multimodal capabilities are focused on vision, images, and document OCR, without voice generation tokens.

---

### Pricing & Value Matrix

- **Input Price:** $3.00 per million tokens (≤200K tokens); $6.00/1M (>200K tokens)
- **Output Price:** $15.00 per million tokens (≤200K tokens); $22.50/1M (>200K tokens)
- **Cache Read:** $0.30 per million tokens
- **Context Capacity:** 200,000 tokens default (up to 1,000,000 tokens)
- **Speed Tier:** Fast / Mid-tier production workhorse

---

### Benchmark Reference Summary

| Benchmark | Score | Context / Configuration |
| :--- | :--- | :--- |
| **SWE-bench Verified** | 79.6% | Multi-file repository bug fixing & resolution |
| **OSWorld-Verified** | 72.5% | Computer use, UI navigation, and desktop OS automation |
| **Terminal-Bench 2.0** | 59.1% | Autonomous command-line and shell execution |
| **Context Window** | 200K – 1,000,000 tokens | Scalable context with needle-in-a-haystack recall |
| **Cache Discount** | 90% savings | $0.30 per million tokens on cache reads |

---

### Evaluation Sources

- Anthropic Official Announcements: [Claude Sonnet 4.6 Release & Capabilities](https://anthropic.com)
- Caylent & Industry Benchmark Evaluations: [Claude Sonnet 4.6 Technical Review](https://caylent.com)
- Developer Documentation & Messages API Guide: [Anthropic Vision & Pricing Specs](https://claudexia.tech)
