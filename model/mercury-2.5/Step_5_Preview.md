# Mercury 2.5 — findings by Step 5 Preview

- Source: Inception Labs (`inception/mercury-2.5`, released 2026-09-08)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 2.5 (Inception Labs' fourth-generation diffusion LLM flagship)
- **Short description:** The flagship of the diffusion-LLM school — Mercury 2.5 generates and refines tokens in parallel via iterative denoising instead of left-to-right autoregression, and Inception calls it "the most capable diffusion LLM on the market" and "the largest diffusion language model ever trained." Its pitch is latency and token efficiency: a **40% intelligence increase over Mercury 2** at "the same low-latency, low-cost serving profile," measured by Artificial Analysis at **617.6 tok/s — rank #2 of 182** — while producing only **35M output tokens** across the Intelligence Index (#15/182, "highly concise"), with customer-reported wins like Augment Code's compaction stage dropping from 150 s to 27 s (−82%) at −90% cost. The intelligence side is where the diffusion bet has not yet landed: AA scores it **12 — rank #97/182, below its price-tier median of 13** — and as of research date there is **no public SWE-bench, GPQA, AIME or Terminal-Bench number** for the model at all. Proprietary and closed (no weights); sold at $0.20/$0.75 with an 80%-off launch promo ($0.04/$0.15) and 100 M free tokens for new API keys.
- **Provider / access:** Inception API (first-party), Baseten, OpenRouter; enterprise with dedicated capacity and ZDR via ARMES. **No public weights** (the `inceptionai` HF org is a reserved-name placeholder).
- **Release:** 2026-09-08 (preview on OpenRouter/Benable from ~2026-08-31).
- **Context window:** 260K tokens; max output 65,536.
- **Modalities:** Text in → text out; tunable reasoning effort, parallel tool calls, schema-aligned JSON output.
- **Pricing (as of 2026-10-09):** list $0.20/M input, $0.75/M output, $0.02/M cached; launch promo $0.04/$0.15 (cache $0.004) still advertised on OpenRouter in early October.
- **Architecture:** dense bidirectional diffusion Transformer trained on discrete denoising objectives; custom GPU kernels; accompanying Mercury Voice (2026-09-29) and Mercury Router products.

### Raw benchmarks found

Artificial Analysis (independent; per-eval values paywalled/not public):

- Intelligence Index: **12** (12.3 with decimals) — **#97/182**, below the class median of 13
- Output speed: **617.6 tok/s** (#2/182; vendor claim 1,107 tok/s on "widely-available NVIDIA GPUs")
- Time to first token: **2.98 s** (tier median 2.16 s)
- Output-token economy: **35M tokens** per Intelligence Index run, #15/182 — "notably fast and highly concise"
- Cost per Intelligence Index task: **$0.12**

Third-party (small samples, directional):

- AI BENCHY (Mercury 2.5 Preview): score 5.0, rank #319, 9.9 reliability, 44.9% pass rate (6/23); strongest in puzzle solving, weakest in tool calling
- Benchable suite (vendor-adjacent): coding 98.0%, math 98.0%, reasoning 96.0%, instruction following 0.0%

Production/customer-reported (not standardized):

- OpenCode OpenCall median response latency ~170 ms; Augment Code compaction 150 s → 27 s (−82%) at −90% cost
- SWE-bench Verified, GPQA Diamond, Terminal-Bench, AIME, SciCode, HLE: **no verified public score found**

### Normalized scores (1–100)

- **Tool use: 42/100.** Parallel tool calls and schema-aligned JSON are real features and AA's composite (which includes τ³-style agentic tasks) still lands below median; the only tool-specific datapoint — AI BENCHY — names tool calling as its weakest category at 44.9% pass, rank #319.
- **Reasoning: 45/100.** AA Intelligence Index 12 (#97/182, below median) with a 40% gain over Mercury 2 that does not close the gap; no public GPQA/HLE/AIME/SciCode number exists to lift or confirm the score.
- **Context window: 66/100.** 260K is the 200K–500K band (65–84) — double Mercury 2's 128K — but with no published retrieval or long-context curve, the top of the band is unearned.
- **Multimodal: 12/100.** Text-only — the methodology's text-only band (10–20).
- **Coding: 43/100.** No SWE-bench or Terminal-Bench figure is public; AI BENCHY's 44.9% pass at #319 and Benchable's coding-suite 98.0% disagree wildly, so the low end of the mid band is the honest read.
- **Cost efficiency: 90/100.** $0.04–0.20/M input and $0.15–0.75/M output with 35M-token conciseness (#15/182) and $0.12 per Intelligence-Index task — roughly the methodology's ~$0.1/$0.4 ≈ 88–92 range; proprietary, no self-hosting path.
- **Overall Score: 42/100.** Best-fit recommendation: the latency-and-token-efficiency specialist — #2-of-182 output speed and best-in-class conciseness at low price; below-median intelligence on the only independent composite, and the architecture's bet depends on whether benchmark transparency ever catches up.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (Inception Labs blog and models page, Artificial Analysis model page, OpenRouter comparison data, ORCA Router and RuntimeWire launch analysis, ARMES model docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Mercury_3.md`, using the same headings.
