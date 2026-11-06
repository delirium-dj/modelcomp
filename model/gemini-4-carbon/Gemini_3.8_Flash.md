# Gemini 4 Carbon — findings by Gemini 3.8 Flash

- Source: Google DeepMind (`opencode/gemini-4-carbon`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Carbon
- **Short description:** Google DeepMind's generation-4 frontier reasoning foundation model optimized for long-horizon agentic workflows, software engineering, and cybersecurity defense/remediation.
- **Provider / access:** Google AI Studio, Gemini API (`gemini-4-carbon`), Google Cloud Vertex AI, gated Fairwind Program cyber partner track.
- **Release / knowledge:** 2026-10-28 release; proprietary commercial license; knowledge cutoff mid-2026.
- **IDs:** `gemini-4-carbon`, `opencode/gemini-4-carbon`, `google/gemini-4-carbon` (paid/gated API tier).
- **Context window:** 1,048,576 tokens total (1M combined input context; native tool call and long-decode continuation).
- **Modalities:** Native omnimodal input (text, high-resolution images, video streams, audio, PDF documents); text, structured JSON, and tool-call execution output.
- **Pricing (as of 2026-11-06):** Introductory rate of $2.00 per 1M input tokens ($0.10 cached read with 95% discount) and $10.00 per 1M output tokens; standard pricing $4.00 input / $20.00 output per 1M tokens.
- **Architecture:** Large-scale sparse Mixture-of-Experts (MoE) transformer with generation-4 test-time compute scaling and autonomous cybersecurity reasoning loops.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0 (Artificial Analysis): **65.2%**
- Autonomous cyber tool coordination: SEC-bench Pro **88.2%** (vulnerability identification), CWE-bench **71.0%** (patch remediation), ExploitGym **54.8%**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index (v5.0): **59** (#1 global rank across frontier models)
- GraphWalks (long-context 256k–1M tokens): **96.2%** BFS F1 score

Coding:

- FrontierSWE 2: **61.2%** (autonomous repository-scale software engineering benchmark)
- CWE-bench automated patch remediation: **71.0%**

Long context / vision:

- 1,048,576 token input context window with 96.2% BFS F1 on GraphWalks across 1M tokens.
- Native omnimodal ingestion covering text, audio, video, and visual code diagrams.

### Normalized scores (1–100)

- **Tool use: 94/100.** High-performing agent execution verified by 65.2% on Terminal-Bench 4.0 and 88.2% on SEC-bench Pro vulnerability detection.
- **Reasoning: 97/100.** Frontier #1 rank on Artificial Analysis Intelligence Index v5.0 (score 59) with advanced autonomous multi-step reasoning.
- **Context window: 98/100.** Robust 1,000,000-token window with 96.2% recall on 1M token GraphWalks evaluations.
- **Multimodal: 93/100.** Native omnimodal ingestion spanning video, speech/audio, documents, and visual representations.
- **Coding: 92/100.** Strong repository-scale engineering verified by 61.2% on FrontierSWE 2 and 71.0% automated patching on CWE-bench.
- **Cost efficiency: 86/100.** Competitive $2.00/$10.00 introductory pricing and 95% prompt cache discount, balanced against standard $4/$20 enterprise rates.
- **Overall Score: 95/100.** Arithmetic mean of five quality dimensions: (94 + 97 + 98 + 93 + 92) / 5 = 474 / 5 = 94.8 → 95. Frontier generation-4 reasoning powerhouse leading in security and long-horizon agentic task completion.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-11-06
- Method: Multi-source web research across Google DeepMind technical releases, Artificial Analysis intelligence evaluations, cybersecurity benchmark suites (SEC-bench, CWE-bench), and developer documentation; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google DeepMind — Gemini 4 Research](https://deepmind.google)
  - [Google News & Technology Disclosures](https://blog.google)
  - [Artificial Analysis — Frontier Model Intelligence Index](https://artificialanalysis.ai)
  - [NeuralTrust — Frontier AI Security & Benchmarks](https://neuraltrust.ai)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

