- Source: Google/Gemini 2.5 Flash
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash
- **Short description:** Google's 2025-05-20 I/O hybrid-reasoning model balancing quality, cost and latency, with dynamic controllable compute and a 1M-token window. A distinct model; Gemini 2.5 Pro, 2.5 Flash-Lite and the 3.x Flash line are separate.
- **Provider / access:** Gemini app, Google AI Studio, Vertex AI, Firebase AI Logic SDK; API billed per input/output token; 45 output languages; multimodal composition with the Imagen model.
- **Release / knowledge:** preview 2025-04-17, GA 2025-05-20, updated build 2025-06-06; knowledge cutoff: no verified public score found.
- **IDs:** `gemini-2.5-flash` family ID as cited. No free Zen ID verified.
- **Context window:** **1,000,000 tokens**.
- **Modalities:** **text, code, image, video and audio in; multimodal output** per the Baike article; tool calling (Google Search), dynamic thinking with customisable reasoning budgets (token limits). No verified non-text output detail.
- **Pricing (as of 2026-11-14):** per-input/output-token API billing; no exact rate card in the retrieved page — no verified public price found. CAR-bench measured **$0.02 for 100 basic tasks**.
- **Architecture:** Proprietary, closed weights; parameter count not disclosed. Dynamic thinking with developer-adjustable processing time / reasoning budget.

### Raw benchmarks found

Agent / tool use:

- CAR-bench (BMW Group + University of Augsburg, Feb 2026): **1.1 s** response time and **$0.02** for 100 basic tasks; used as the core model driving the virtual-user system
- OpenRouter global call-volume ranking (2026-03-16→22): among the listed US models; US-model total calls +7.3% week-over-week (directional)
- Native Google Search tool calling (qualitative)
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- 45-language output support and dynamic thinking with custom reasoning budgets (qualitative)
- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found for this exact ID

Coding:

- Code input/output and Firebase AI Logic integration (qualitative)
- SWE-bench Verified / Terminal-Bench / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- 1M-token window; no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 84/100.** Native tool calling, a measured 1.1 s CAR-bench response, dynamic reasoning budgets and broad platform integration; capped by no scored agent harness figure.
- **Reasoning: 82/100.** Hybrid reasoning with developer-controllable compute and 45-language coverage; capped by no published numeric reasoning benchmark for this exact ID.
- **Context window: 91/100.** A verified 1M-token window at a Flash-tier cost/latency point; capped by no retrieval benchmark.
- **Multimodal: 90/100.** Text, code, image, video and audio input with multimodal output and Imagen composition; capped by no published multimodal benchmark score.
- **Coding: 80/100.** Code input/output with Firebase AI Logic support; capped by zero published named coding benchmark scores.
- **Cost efficiency: 94/100.** $0.02 per 100 CAR-bench tasks, 1.1 s latency, dynamic compute budgets and per-token billing at Flash-tier pricing. Excluded from Overall.
- **Overall Score: 85/100.** Half-up mean of 84, 82, 91, 90, 80 = 85.4 → 85. Best fit: high-volume, low-latency multimodal customer-service, document-parsing and real-time workloads; superseded by the Gemini 3.x Flash line.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Gemini 2.5 Flash article (release timeline, 1M context, five input modalities, dynamic thinking/reasoning budgets, 45 languages, Firebase/Imagen integration, CAR-bench 1.1 s / $0.02, OpenRouter call-volume note). Directional rankings are not assigned numeric scores; every raw benchmark row without a published figure is marked "no verified public score found". Gemini 2.5 Pro / Flash-Lite and Gemini 3.x Flash figures are never merged here. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass.
  - [Gemini 2.5 Flash — 百度百科 (specs, modalities, CAR-bench, platforms)](https://baike.baidu.com/item/Gemini%202.5%20Flash/65575237)
