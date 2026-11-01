# Jev 1.13 — findings by Qwen 3.8 Max

- Source: TypeSafe AI "Jev" (`opencode/jev-1.13` on Zen; `typesafe/jev-1.13` on OpenRouter; **no AA page — `artificialanalysis.ai/models/jev-1-13` → 404**)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Verdict — SCORED (a genuinely distinct, independently-measured *decision component*, not a chat LLM).** **Jev 1.13** is **TypeSafe AI's flagship "System One" model**: announced **2026-09-15**, on **OpenRouter since 2026-09-18** via a dedicated **`POST /api/v1/systemone`** endpoint (`typesafe/jev-1.13`). It is **not a text generator** — it takes a *state* (text/JSON/array) plus **typed questions** and returns, for each, an **answer + a probability distribution over the options + a confidence**, in **~320–455 ms**, at **$0.042 / M input tokens with free output** (`~950 tokens per decision`; a free slot `jev-1.13-free` also exists). Question types are **`choice`** (pick 1 of ≤255 worded options), **`score`** (2–10 levels) and **`noul`** (yes/no → probability of yes). Its own `meta` tradeoff is explicit — **"It cannot generate text, so the coding and general-reasoning axes barely apply — score it as a component, not a model."** This report honors that: it **rewards the elite, well-calibrated decision quality** that two independent studies measure, while **scoring the generative axes (Coding, deliberative Reasoning) low** because the artifact structurally cannot produce text, code, or explanations. **AA carries no page (404) — no Intelligence Index / Speed / Cost / Verbosity cell** — so the entire quantitative base is a **peer-reviewed arXiv evaluation** plus an **independent hands-on JevBench**, corroborated by the vendor's own JevBench 1.5.4 score of **72.13**.

## Model card

- **Vendor / artifact:** TypeSafe AI (emerged from stealth ~mid-Sep 2026 after "two years behind closed doors"); first "System One" model, `jev-1.13` (build pin `typesafe/jev-1.13-20260917`).
- **Class:** **typed-decision model** (Kahneman "System One" fast-intuition framing) — **not** an autoregressive chat/code model. Returns typed decisions only.
- **Inputs → outputs:** text / JSON / array *state* + typed questions (`choice` / `score` / `noul`) → **answer + per-option probabilities + confidence**; **never** free text.
- **Modalities:** **text-only** — images / audio / video **"not supported (yet)"** → Multimodal at the corpus **50 floor**.
- **Context:** **64 K per request** (≈32 K state + 32 K question), **262 K opt-in via header** — modest but adequate for a per-item decision.
- **Latency / cost:** ~**320–455 ms** flat regardless of 3→25 questions (no generation to scale); **$0.042/M in, output free**. **Cloud-only, early access, no published weights, no on-prem** (data leaves your infra to a startup).
- **License / weights:** **proprietary**, closed — the `typesafe/jev-1.13` pin is required because confidence thresholds are version-specific.

### Raw benchmarks found

> **Provenance.** No AA page (404) → no independent AA index/speed/cost. Quantitative evidence = **(1) a peer-reviewed arXiv evaluation** (Deußer et al., *Evaluating and Benchmarking the System One Model Jev*, **arXiv 2609.37647**, v2 2026-10-29, cited ×31); **(2) Daniele Teti's independent JevBench** (danieleteti.it, 2026-09-22, downloadable Delphi code + CSVs, balanced-accuracy with 95% bootstrap CIs); **(3) vendor** JevBench 1.5.4 = 72.13 (from `meta`). Teti's dataset gold-labels were authored/reviewed by Claude Opus 5 (hence no Anthropic comparator). All figures below carry their harness caveat.

**Independent — arXiv 2609.37647 (jev-1.13.0, zero-shot, 37 datasets, 346,009 requests for <$10):**
- **Classification / commonsense:** **95–99% on IMDB, SST-2, HellaSwag, ARC**; **beats Qwen on 27/37 datasets and Gemma on 37/37** — an elite discrimination result for a sub-1B-scale decision head.
- **Calibration:** choice probabilities are **well-calibrated**, enabling **selective prediction** (defer-to-human); binary probabilities needed **tuned thresholds** (**UNFAIR-ToS micro-F1 0.50 → 0.75** after calibration) — the raw defaults are not calibrated out-of-the-box.
- **Degrades on:** low-resource languages, fine-grained / noisy labels, and **rubric-style judgments** (open-ended criteria it can't reduce to typed options).
- **MMLU:** answers the **calculation-heavy** items more accurately than verbal reasoning.
- **Sequential / agentic-decision tasks (the weak spot):** **35% ALFWorld** (unseen), **42% TextWorld**, **21% BabyAI-Text**, **90% optimal-probability Blackjack**, FrozenLake avoids holes but **repeats no-effect actions**; **Qwen completes more ALFWorld/TextWorld (54.5% / 51.1%)** — Jev is a *fast classifier*, not a *planner*.

**Independent — Daniele Teti JevBench (105 real customer emails, 61 deliberately hard; 25 typed questions; EN + IT; balanced accuracy):**
| Model | 3 decisions | 10 decisions | 25 decisions |
| --- | --- | --- | --- |
| **Jev 1.13** | **94.3** [91.3;96.8] | **97.2** [96.0;98.1] | **94.8** [93.3;96.1] |
| Gemini 2.5 Flash Lite | 82.2 | 87.8 | 90.1 |
| GPT-5.6 Luna | 90.2 | 96.5 | 95.7 |
| GPT-5.6 Terra | 89.9 | 96.9 | 96.0 |
| Gemini 3.1 Pro | 92.0 | 97.6 | 97.1 |
| DeepSeek V4 Pro | 92.9 | 96.6 | 94.6 |
- At **3 and 10 decisions no LLM beats Jev** beyond noise; at **25 only Gemini 3.1 Pro edges it (+2.3 pts)**. **Flash Lite is worse at every level.**
- **Speed/cost:** Jev **320–340 ms flat**; **4.1–8.5× faster** than the cheapest accuracy-matching LLM, ~**20×** vs Gemini 3.1 Pro. Per **1,000 emails at 25 decisions**: **Jev $0.08** vs GPT-5.6 Terra $2.17 vs Gemini 3.1 Pro $11.82. (Vendor "193× faster / 444× cheaper" is measured against frontier models on vendor-chosen workflows — Teti's apples-to-apples figure is ~4–20×.)
- **Calibration:** **above 0.95 confidence Jev is right 96.5%**; the 0.85–0.95 band is **over-confident** (claims 0.90, right 77.6%) — thresholds must be tuned per dataset. **"Can't hallucinate" holds for format, not for judgment** (it can't say "I don't know" — it spreads probability over your fixed options).

**Vendor:** `meta` reports **JevBench 1.5.4 score 72.13** and **~0.6 s/decision** — a self-run harness, directionally consistent with Teti's independent reproduction.

### Normalized scores (1–100)

- **Tool use: 52/100.** It does **not** autonomously call functions or orchestrate agents — it emits one typed decision per pass. Credit is for the *decision-as-a-tool* role it is built for (confidence-based routing / triage / guardrails, selective prediction) and its **partial** sequential-environment performance (ALFWorld 35%, TextWorld 42%, BabyAI 21%, Blackjack 90%) — all **below Qwen**, so well short of a true agent.
- **Reasoning: 44/100.** Elite *fast discrimination* (95–99% on HellaSwag/ARC/IMDB/SST-2; beats Qwen 27/37, Gemma 37/37) but **zero deliberative reasoning**: it cannot chain-of-thought, explain, or handle open-ended / rubric judgments, and **degrades on fine-grained and noisy criteria**. The `meta` says the general-reasoning axis "barely applies" — reflected here as strong classifier, absent deliberator.
- **Context window: 52/100.** **64 K per request (≈32 K state + 32 K question), 262 K opt-in** — adequate for a per-item decision, modest against the corpus's long-context models; not a limiting factor for its task.
- **Multimodal: 50/100.** **Text-only** — images / audio / video explicitly "not supported (yet)". Corpus **floor**, not counted down further.
- **Coding: 24/100.** It **cannot generate, review, or reason about code** at all (no SWE-bench, no LiveCodeBench, no completion) — the axis "barely applies." A small non-zero for classifying code-adjacent decisions (e.g. routing a bug report) but no code capability.
- **Cost efficiency: 90/100.** Scored but **NOT counted** in Overall. **$0.042/M input + free output**, ~950 tokens/decision, **$0.08 per 1,000 emails** vs $2.17–$11.82 for comparable LLMs (Teti, independent), flat 320 ms regardless of question count, and a **free `jev-1.13-free` Zen slot**. Genuinely elite cost profile *for its niche*.
- **Overall Score: 44/100.**

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-11-01
- Method: public internet research (**AA `artificialanalysis.ai/models/jev-1-13` → 404** — no index/speed/cost/verbosity cell; **arXiv 2609.37647** *Evaluating and Benchmarking the System One Model Jev* (Deußer et al., v2 2026-10-29) fetched — 37-dataset zero-shot, 95–99% IMDB/SST-2/HellaSwag/ARC, beats Qwen 27/37 & Gemma 37/37, calibrated selective prediction, UNFAIR-ToS 0.50→0.75 after tuning, sequential ALFWorld 35%/TextWorld 42%/BabyAI 21%/Blackjack 90% vs Qwen 54.5%/51.1%; **danieleteti.it independent JevBench** fetched in full — 105 emails / 25 questions / EN+IT, balanced-accuracy table (Jev 94.3/97.2/94.8 vs Gemini 3.1 Pro, GPT-5.6 Luna/Terra, DeepSeek V4 Pro, Flash Lite), 4–20× faster, $0.08 vs $2.17/$11.82 per 1,000 emails, calibration >0.95→96.5% right / 0.85–0.95 over-confident 77.6%; **docs.typesafe.ai/concepts/system-one** — System One class, Choice/Score/Noul primitives, typed answers + probabilities not text, text-input-only; **`meta`** — `opencode/jev-1.13`, JevBench 1.5.4 72.13, $0.042/M in + free out, 64 K/262 K, category `decision`, tradeoff "score it as a component, not a model," `noFreeId: false`.)
- Future sources: becomes materially more scoreable if **AA opens a page** (index/speed/cost), if **weights are released** (enables independent reproduction beyond the two published studies), or if TypeSafe adds **image/audio support**. **Guards applied:** (1) do **NOT** credit a general chat/LLM's SWE-bench / GPQA / AIME / LiveCodeBench / Terminal-Bench numbers onto Jev — it is a different model class and has **none of its own** on those axes; (2) the **arXiv "beats Qwen 27/37 / Gemma 37/37" is classification accuracy on 37 typed-dataset tasks**, NOT general reasoning or generation superiority — do not read it as a chat-capability win; (3) vendor **"193× faster / 444× cheaper"** is frontier-comparator marketing — Teti's apples-to-apples figure is **~4–20×**; (4) **Cost efficiency 90 is NOT counted** in the Overall mean; (5) Multimodal stays at the **text-only 50 floor** (image/audio/video "not supported (yet)"); (6) **no numbers invented** — every figure is from arXiv 2609.37647, Teti's independent JevBench, or the vendor `meta`/docs, each with its harness caveat.
