# Gemini 4 Argon — findings by QoDuck

- Source: Google (`gemini-4-argon`)
- Date: 2026-11-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Google's Gemini 4 frontier model (announced 2026-09-30), the first Gemini with a codename instead of Pro/Flash tiers; natively multimodal reasoning model for real-world coding, enterprise knowledge work, and cyber defense. Not a fine-tune of a prior model. Superseded at the top of Google's lineup by Gemini 4 Carbon (2026-10-28), which now leads the AA Intelligence Index.
- **Provider / access:** Gemini API (Google AI Studio) `gemini-4-argon`; OpenCode Zen `opencode/gemini-4-argon` via `https://opencode.ai/inference/google/v1beta/models/gemini-4-argon` (paid, no Free ID); OpenRouter (listed as "Gemini 4 Argon by google"); Vertex AI. Launch was gated to the Fairwind program (trusted cyber defenders); public paid API + Google AI Ultra followed. Antigravity managed-agent support (`antigravity-preview-09-2026`).
- **Release / knowledge:** Announced 2026-09-30; model card published 2026-10-13; knowledge cutoff March 2026 (per DeepMind model card).
- **IDs:** `gemini-4-argon` (Gemini API), `opencode/gemini-4-argon` (Zen — no Free ID exists on Zen or the Gemini API free tier).
- **Context window:** Unified 1,048,576 tokens (input + thinking + output share one window, per Gemini API docs). Default max output 65,536 tokens; background execution can continue a response up to 1M minus input in 64K chunks. Google cites C/C++→Rust migrations up to 800K lines.
- **Modalities:** Text, image, audio, video input; text output (DeepMind model card). Agentic video understanding GA. PDF input not explicitly documented in the model card. Reasoning: thinking_level low/medium(default)/high; temperature/top_p/top_k ignored; tool use supported.
- **Pricing (as of 2026-11-09):** Introductory 50% discount through 2026-11-30: $2.00 / 1M input, $10.00 / 1M output (includes thinking tokens), $0.10 / 1M cached input (implicit caching, ≥4,096-token prompts, 95% discount). Regular rates from 2026-12-01: $4.00 / $20.00 / $0.20 cached (Gemini API docs + OpenCode Zen agree). No free tier. Explicit caching unsupported.
- **Architecture:** Large-scale sparse mixture-of-experts (MoE) transformer, natively multimodal (text/vision/audio); trained on Google TPUs with JAX/ML Pathways. Parameter count undisclosed; proprietary.

### Raw benchmarks found

Agent / tool use:

- AutomationBench (Zapier): **51.3%** (Google model card; MindStudio corroborates 51.29%) — leads Opus 5.5 (42.5%) and Fable 5.1 (31.4%); ~half of tasks still fail a backend check. AA's AutomationBench-AA variant: **77.51%** (different harness, not comparable).
- GDPval-AA: **1630.66 Elo** (Artificial Analysis, 95% CI 1610–1651) — below Opus 5.5's 1846.
- Agent's Last Exam (computer use): **39.5%** pass rate (Google card) — leads GPT-6 Astra 34.2%, Opus 5.5 38.2%.
- OSWorld-2.0 (offline subset, partial): **69.2%** (Google card) — trails GPT-6 Astra 72.6%.
- Harvey's Legal Agent Benchmark: **19.6%** (Google card) vs Opus 5.5 3.8%, Astra 5.4% — but AA's Harvey LAB run shows **3.89%** (harness conflict; vendor figure provisional).
- Vals Finance Agent v2: **65.4%** (Google card) — leads compared models. Vals Index: **68.9%** (leads; finance >50% of index weighting — caveat).
- Tau3-Banking / Tau2-Bench: no verified public score found (AA lists null). Claw-Eval / MCP-Atlas: no verified public score found.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **50.41** (AA model page, high effort, rank #15/69 current vintage) vs **52.6** (launch-vintage AA via NeuralTrust) / **53** (MindStudio) — index rescaled as newer models joined; Opus 5.5 measured 57.6–59.1 and Gemini 4 Carbon 60.03 on the current scale.
- HLE: **57.1%** full / **56.7%** HLE-Diamond (Artificial Analysis) vs Opus 5.5 61.4%, Astra 54.7%.
- CritPt: **27.14%** full / **52.5%** v2 Hard subset (AA).
- GPQA Diamond: no verified public score found (AA null; Google card silent). ARC-AGI / AIME25: no verified public score found.
- RiemannBench: **76.0%**, LABBench 2: **88.8%** (Google card) — both lead the compared set.
- Omniscience (AA): net index **46.1**, accuracy **48.3%** (MindStudio: 50%), hallucination rate **15%** — lowest among 45+ Index models (Astra: 51% hallucination but 63% accuracy). Argon admits uncertainty more, knows less.
- Arena.ai Text Arena: **1525 points, #1** at launch (via NeuralTrust).

Coding:

- DeepSWE v1.1: **77.9%** (Google card) — leads Opus 5.5 74.2%, Astra 74.1%; caveat: Google used its own agent harness for Argon while rivals' numbers came from separate leaderboards (MindStudio methodology criticism — not a fully controlled comparison).
- FrontierSWE v2: **55.0%** (Google card) — trails Astra 65.5% by 10.5 pts and Opus 5.5 62.3%.
- Terminal-Bench 4.0: **57.4%** (Google card) / **57.07%** (AA independent — corroborated) — trails Opus 5.5's 66.4% vendor figure by ~9 pts.
- Vibe Code Bench: **91.9%** (Google card) — leads (rivals ~90%).
- FrontierCode 2.0: **25.71%** (AA) — weak.
- SciCode: **61.81%** (AA) — clears the 55% frontier reference.
- LiveCodeBench: no verified public score found (AA null). SWE-bench Verified: no verified public score found.
- PostTrainBench (ML engineering): **45.3%** (Google card) — Opus 5.5 leads 49.3%.
- Terminal-Bench-Science 0.1: **57.6%** vendor / **52.86%** AA — Astra leads (68.1% vendor).

Long context:

- GraphWalks (BFS F1): **99.7% at ≤128K**, **84.2% at 256K–1M** (Google card) — best long-range retrieval among compared models (Opus 5.5 66.8%, Astra 71.8% at 256K–1M).
- AA-LCR: **79.67%** (AA). MLCR: **13.89%** (AA — weak multi-document long-context recall).

Multimodal understanding:

- LVBench (long video): **91.7%** (Google card) — leads compared set (87.5% / 79.7% / 83.7%).
- Chartography: **71.6%** (Google card) — narrowly leads (Astra 71.0%, Opus 5.5 66.3%).
- MMMU-Pro: no verified public score found (AA null).

Cybersecurity:

- CWE-bench v1: **68.0%** (Google card) — tied with GPT-6 Astra, ahead of Opus 5.5 67.0%. Google claims Gray Swan prompt-injection leadership but published no injection score (NeuralTrust criticism).

**Conflicting-results notes:** (1) AA Index moved 52.6→50.41 across vintages as Carbon/Opus 5.5 joined — launch coverage overstates its standing today. (2) Pricing: AI Studio docs give a firm intro end date (2026-11-30); MindStudio/NeuralTrust claimed "no announced end date" — first-party docs win. (3) Cost per Index task: $1.99 promo / $3.98 standard (MindStudio) vs $9.95 (AA current page, high effort, 113M output tokens) — effort/vintage dependent; verbosity (~62K–110M tokens/task vs Astra's 27K) partly offsets the low sticker price. (4) AutomationBench 51.3% (Zapier) vs 77.51% (AA variant) and Harvey LAB 19.6% (vendor) vs 3.89% (AA) — harness gaps, both retained. (5) Axios/Bloomberg reported internal-test disappointment (Google disputes); The Decoder's verdict: "closes the gap without taking a clear lead." (6) Early "1M output" reports conflated the unified window with output cap; actual default output is 64K (1M only via background continuation).

### Normalized scores (1–100)

- **Tool use: 90/100.** Leads AutomationBench (51.3%), Agent's Last Exam (39.5%), Harvey LAB (vendor figure) and Vals Index; capped at the band's floor by GDPval-AA 1631 Elo (below the ~1750 frontier ref), OSWorld trailing Astra, and vendor-vs-AA harness conflicts.
- **Reasoning: 86/100.** AA Index ~50–53 sits below the 60+ frontier anchor (Opus 5.5 ~58, Carbon 60); HLE 57.1% clears the 40% ref, RiemannBench/LABBench lead, and 15% hallucination rate is best-in-class — but 48–50% knowledge accuracy and missing GPQA/ARC evidence cap it.
- **Context window: 95/100.** Verified unified 1,048,576 window → 95–100 tier; GraphWalks 84.2% at 256K–1M leads rivals but is far below the ≥98%-at-512K bar for 100; MLCR 13.9% is a weak spot. 64K default output noted (background continuation to 1M).
- **Multimodal: 90/100.** Native text+image+audio+video input (official card) reaches the 90–100 tier; LVBench 91.7% and Chartography 71.6% lead; text-only output and unverified PDF support hold it at the tier floor.
- **Coding: 88/100.** DeepSWE 77.9% and SciCode 61.8% clear frontier refs, Vibe Code Bench 91.9% leads; capped by Terminal-Bench 57.4% (9 pts behind Opus 5.5), FrontierSWE 55.0% (10.5 behind Astra), FrontierCode 2.0 25.7%, and the own-harness caveat on DeepSWE.
- **Cost efficiency: 68/100.** Evaluated at the current intro tier $2/$10 (≈70 between the $1.25/$4.25≈88 and $3/$15≈60 anchors); capped by verbosity (62K+ output tokens/task), $9.95/Index-task at high effort, and the 2026-12-01 doubling to $4/$20 (≈54 at regular rates).
- **Overall Score: 89.8/100.** Mean of (90+86+95+90+88)/5 = 89.8 — best-fit for multimodal enterprise automation and long-context knowledge work at the intro price; agentic coding trails Opus 5.5/Astra and the index lead has passed to Gemini 4 Carbon.

---

## Signature

- Provided by: **QoDuck (Qoder agent)** — 2026-11-09
- Method: public internet research — 3 independent web searches plus direct fetches of Google's announcement/model card, Gemini API docs, OpenCode Zen docs, Artificial Analysis, and independent analyses (MindStudio, NeuralTrust); vendor-vs-independent conflicts compared and labelled; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Gemini 4 Argon: our next era of frontier intelligence — Google Blog](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/)
  - [Gemini 4 Argon Model Card — Google DeepMind](https://deepmind.google/models/model-cards/gemini-4-argon/)
  - [What's new in Gemini 4 Argon — Gemini API docs](https://aistudio.google.com/docs/latest-model)
  - [Gemini 4 Argon (high) — Artificial Analysis](https://artificialanalysis.ai/models/gemini-4-argon)
  - [Gemini 4 Argon Benchmarks: How It Really Stacks Up — MindStudio](https://www.mindstudio.ai/blog/gemini-4-argon-benchmark-analysis)
  - [Gemini 4 Argon: Benchmarks, Pricing & Security — NeuralTrust](https://neuraltrust.ai/blog/gemini-4-argon)
  - [OpenCode Console Models (Zen route + intro pricing)](https://opencode.ai/v2/docs/console/models/)
  - [OpenCode Models: IDs, Pricing & Usage — Mastra](https://mastra.ai/models/providers/opencode)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.