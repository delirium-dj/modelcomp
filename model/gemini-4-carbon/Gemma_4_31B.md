# Gemini 4 Carbon — findings by Gemma 4 31B

- Source: Google/Gemini 4 Carbon
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Carbon
- **Short description:** Google's frontier multimodal model, designed for high-complexity agentic workflows, advanced coding, and massive context retrieval.
- **Provider / access:** Google AI Studio `google/gemini-4-carbon`, Vertex AI, Google Antigravity.
- **Release / knowledge:** October 2026 release; knowledge cutoff not explicitly stated (assumed late 2025/early 2026).
- **IDs:** `google/gemini-4-carbon`
- **Context window:** 1,000,000 tokens total; verified via GraphWalks with 96.2% retrieval accuracy.
- **Modalities:** Multimodal (Text, Image, PDF in; Text out); reasoning enabled; tool calls; JSON mode.
- **Pricing (as of 2026-11-13):** no verified public score found (likely tiered pricing via Google AI Studio/Vertex AI).
- **Architecture:** Proprietary MoE.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0 (AA): **65.2%** (leads peer group: Argon 57.1%, Astra 59.1%, Opus 5.5 59.6%)
- OSWorld-2.1 (Offline subset): **81.5%** (vs Opus 5.5 87.2%, Astra 80.9%)
- Agents' Last Exam v1.1: **77.4%** (leads peer group: Argon 69.0%, Astra 73.1%, Opus 5.5 71.6%)
- AutomationBench (Zapier): **53.9%** (leads peer group: Argon 51.3%, Astra 41.4%, Opus 5.5 42.5%)
- Vending-Bench 2: **$16,484** (Bank balance; leads peer group)

Reasoning / knowledge:

- AA Index v5.0: **59** (leads peer group: Argon 50, Astra 57, Opus 5.5 58)
- Vals Index v2.2: **70.4%** (vs Opus 5.5 70.2%, Argon 69.2%)
- RiemannBench: **72.0%** (vs Argon 76.0%)
- Terminal-Bench-Science 0.1 (AA): **64.8%** (leads peer group: Argon 52.9%, Astra 63.3%, Opus 5.5 59.0%)

Coding:

- SWE-sweep: **9.6%** (leads peer group: Astra 9.5%, Opus 5.5 3.6%)
- FrontierSWE 2: **61.2%** (vs Astra 65.5%, Opus 5.5 62.3%)
- Terminal-Bench 4.0 (AA): **65.2%**

Long context:

- GraphWalks (256k to 1M, BFS F1): **96.2%** (leads peer group: Argon 84.2%, Astra 71.8%, Opus 5.5 66.8%)

Multimodal:

- Chartography: **72.5%** (leads peer group: Argon 71.6%, Astra 71.0%, Opus 5.5 66.3%)
- Blueprint-Bench 2 (Similarity): **58.6%** (leads peer group: Argon 54.4%, Astra 49.7%, Opus 5.5 51.2%)

Cybersecurity:

- CWE-bench: **71.0%**
- ExploitGym: **54.8%**
- SEC-bench Pro: **88.2%**

### Normalized scores (1–100)

- **Tool use: 94/100.** Dominates peer group on Terminal-Bench 4.0 and Agents' Last Exam; exceptional agentic reliability.
- **Reasoning: 92/100.** Top of AA Index v5.0 and strong science/math performance; very high cognitive ceiling.
- **Context window: 100/100.** Verified 1M context with near-perfect (96.2%) retrieval.
- **Multimodal: 92/100.** Leads in chart and blueprint understanding; high-fidelity multimodal input.
- **Coding: 90/100.** Leads SWE-sweep and shows strong agentic coding capabilities, though slightly behind Astra on FrontierSWE 2.
- **Cost efficiency: 80/100.** Estimated based on frontier model pricing (not explicitly found, penalty for proprietary cost).
- **Overall Score: 94/100.** Frontier-class multimodal model with industry-leading context retrieval and agentic tool use.

---

## Signature

- Provided by: **Gemma 4 31B (google/gemma-4-31b-it)** — 2026-11-13
- Method: public internet research via webfetch of Google DeepMind official site; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Gemini 4 Carbon Announcement](https://deepmind.google/technologies/gemini/)
  - [Google DeepMind Models](https://deepmind.google/models/gemini/)
- Future sources: add a new file next to this one, e.g., `GPT_5.md`, using the same headings.
