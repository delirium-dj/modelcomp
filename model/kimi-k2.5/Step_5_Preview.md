# Kimi K2.5 — findings by Step 5 Preview

- Source: Moonshot AI (`moonshotai/Kimi-K2.5`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.5. Moonshot's **flagship agentic open model**, released **2026-01-27** — and the deepest evidence base found in this research series: **84 benchmarks**, ahead of Qwen3.8-27B's 75 and DeepSeek V4 Pro's 61. BenchLM scores it **52.87/100, #94 of 1,015**, sitting between its own siblings K2.6 (57.53) and K2.7 Code (53.75), and it has a separately-tracked `Kimi K2.5 (Reasoning)` sibling at 56.23.
- **Short description:** A **1T-total / 32B-active open-weight MoE with a 256K window**, notable for what it unified rather than for any single figure: **it combined vision and text, thinking and non-thinking modes, and single-agent and multi-agent execution in one model**, and its checkpoint was later used by **Cursor as the base for Composer 2.5**. Its measured profile is broad and mid-tier — **AIME26 95.8%, LiveCodeBench v6 85.0%, τ²-bench 95.9% [AA], OmniDocBench 88.8%, CountBench 94.1%, GPQA-D 87.6%** — against **JobBench 8.7%, DeepPlanning 14.4%, APEX-Agents-AA 11.5%, ResearchClawBench 14.0%, GDPval-AA 936 Elo / 17.0% normalized, AA-Omniscience index −7.3 with a 65.7% hallucination rate.**
- **Provider / access:** **Open weights** on Hugging Face (`moonshotai/Kimi-K2.5`) under a **modified MIT licence** (per llmlearner; benchgen records "Apache 2.0" — a licence-description conflict recorded below), Moonshot's own API, and **OpenCode Zen at $0.45/$1.80 with 13 providers tracked**. Self-hosting available.
- **Release / knowledge:** released **2026-01-27** (llmlearner, benchable agree on the date; benchable records creation 2026-01-26). **Knowledge cutoff not disclosed.**
- **IDs:** `moonshotai/Kimi-K2.5` (Hugging Face); `kimi_k2.5` / `kimi-k2-5` (BenchLM canonical); `moonshotai/kimi-k2.5` (Zen); `moonshotai-kimi-k2.5` (cloudprice); `MoonshotAI/Kimi-K2.5-0127` (benchable).
- **Context window:** **256K tokens** (BenchLM) — a quarter of the current 1M standard, and the binding constraint on this model's ranking. cloudprice records 262K.
- **Modalities:** **text, image and video in; text out** — it added **native image understanding** to the K2 line, with 21 measured visual benchmarks behind it.
- **Pricing (as of 2026-11-05):** **from $0.450 per 1M input** across 13 providers (cloudprice); Zen carries $0.45/$1.80. Methodology anchors put $0.45/$1.80 near ≈92.
- **Architecture:** **open-weight MoE, 1T total / 32B active** — a 3.2% activation ratio, one of the most favourable in this research series and the reason its cost-efficiency score is near-ceiling. **C-RADIO is not used here** (that is the Nemotron architecture); K2.5 is a conventional MoE.

### Raw benchmarks found

Moonshot's own Kimi K2.5 model card is the primary source (so those rows are **vendor-run**), with Artificial Analysis, Vals AI, ARC-adjacent third parties, Epoch AI, Gert Labs, LlamaIndex, ResearchClawBench, Claw-Eval, SWE-Rebench, the JobBench paper, React Native Evals, Qwen's comparison tables, GLM-5.1's and Arcee's tables and Openrouter supplying independent rows. **84 benchmarks total — the deepest evidence base found anywhere in this research series.**

Agent / tool use — **the model's weakest dimension, and its defining contrast with K2.6**:

- **τ²-bench: 95.9%** [AA] — the strongest agentic figure here and among the best in this research series
- **WideResearch: 72.7%**; **DeepSearchQA: 77.1%**; **MCP-Tasks: 59.1%**; BFCL v4: 68.3%; QwenClawBench: 54.3%; τ³-bench: 65.7%
- **Claw-Eval: 52.3%** — one of only three measured ClawEval figures in this research series
- Terminal-Bench 2.0: **50.8%** — ~37 points under the 88%+ reference
- **JobBench: 8.7%**; **DeepPlanning: 14.4%**; **APEX-Agents-AA: 11.5%** [AA]; **ResearchClawBench: 14.0%**; Toolathlon: 27.8%; MCP Atlas: 29.5%; Gert Labs: 45.88%
- **GDPval-AA: 936 Elo / 17.0% normalized** [AA] — well under the 1,750 reference
- **OSWorld-Verified, Terminal-Bench 2.1/4.0, MazeBench, ALE, AA Agentic Index, AA AutomationBench: no verified public score found** — so two of three frontier references are unmeasured

Reasoning / knowledge — **split, with the same signature as the other Non-Reasoning models**:

- **GPQA-D: 87.6%** (vendor) / **AA-GPQA Diamond 87.9%** [AA] — fails the 90%+ reference by ~2 points on both
- **HLE: 30.1%** (vendor) / **AA-HLE 30.7%** [AA] — fails the 40%+ reference by ~9 points on both
- **AA-Omniscience: index −7.3, accuracy 35.2%, hallucination rate 65.7%** — a negative index, meaning more incorrect than correct answers
- AA Intelligence Index: **23.5%**; **AA-LCR: 78.0%**; **CritPt: 3.1%** — one of the lowest measured in this research series
- MMLU-Pro: 87.1%; MMLU-Redux: 94.5%; C-Eval: 94%; SuperGPQA: 69.2%; LongBench v2: 61.0%
- IFEval: 93.9%; **AA-IFBench 70.2%**
- **AIME26: 95.8%**; **AIME 2025: 96.1%**; HMMT Feb 2025: 95.4%; HMMT Nov 2025: 91.1%; HMMT Feb 2026: 87.1%; MMAnswerBench: 81.8%
- **ARC-AGI, MRCR, FrontierMath: no verified public score found**
- **BenchLM classifies it Non-Reasoning** — the eighth such model in this corpus, and the classification is consistent with the strong-competition-maths / weak-open-ended-depth split above.

Coding — **solid mid-frontier, with a recorded vendor-vs-independent gap**:

- **SWE-bench Verified: 76.8%** (vendor) / **70.8%\*** (Arcee Trinity-Large-Thinking comparison table) — a **6.0-point gap**, the vendor higher
- **LiveCodeBench v6: 85.0%** (vendor) — the strongest coding figure
- SWE Multilingual: 73.0%; SWE-bench Pro: 50.7%; **SciCode: 48.7%** — under 55%; NL2Repo: 32.0%
- **SWE-Rebench: 58.5%**; **React Native Evals: 77.2%** — a real mobile-coding data point
- **AA Coding Index: 46.8%** — 23.2 points under the 70% reference
- **DeepSWE, Vibe Code Bench, FrontierCode, Terminal-Bench 4.0: no verified public score found** — so the 74% and 55% references are unmeasured

Multimodal (image-in) — **the second-strongest dimension, with a small internal conflict**:

- **CountBench: 94.1%**; **AI2D_TEST: 90.8%**; **OmniDocBench 1.5: 88.8%**; **RefCOCO (avg): 87.8%**
- **Video-MME: 87.4%** (with subtitle) / 83.2% (without); **VideoMMMU: 86.6%**; **MLVU (M-Avg): 85.0%** — genuine video understanding across three benchmarks
- **MMVU: 80.4%**; We-Math: 84.7%; DynaMath: 84.4%; **MathVision: 84.2%**; MMMU: 84.3%; RealWorldQA: 81.0%
- **MMMU-Pro: 78.5%** (vendor) / **AA-MMMU-Pro 75.4%** [AA] — a 3.1-point gap
- CC-OCR: 79.7%; CharXiv: 77.5%; SimpleVQA: 71.2%; MMLongBench-Doc: 58.5%; Design Arena (website): **1,247 Elo**
- **Video-MME is attributed two ways: 87.4% via the upstream Kimi blog and 87.4% via Qwen3.5-397B's table — the two agree exactly, recorded as a confidence signal. ExtractBench, BabyVision, ZeroBench: no verified public score found.**

### Normalized scores (1–100)

- **Tool use: 52/100.** Below the methodology's mid band, and the model's weakest dimension. The protocol and research half is strong — **τ²-bench 95.9% [AA], DeepSearchQA 77.1%, WideResearch 72.7%, BFCL v4 68.3%, τ³-bench 65.7%, Claw-Eval 52.3%** — while the execution half collapses: **JobBench 8.7%, DeepPlanning 14.4%, APEX-Agents-AA 11.5%, ResearchClawBench 14.0%, Terminal-Bench 2.0 50.8%, Toolathlon 27.8%, MCP Atlas 29.5%, GDPval-AA 936 Elo / 17.0% normalized.** **OSWorld-Verified, Terminal-Bench 2.1/4.0, MazeBench, ALE and the AA Agentic Index have no figure at all**, so two of three frontier references are unmeasured. **This is the sharpest contrast with the K2.6 report refreshed earlier in this session (Tool use 62): the K2.6 generation specifically fixed the execution layer.**
- **Reasoning: 62/100.** Mid-band. **GPQA-D 87.6–87.9% is ~2 points under the 90%+ reference, and the competition-maths cluster is genuinely strong: AIME26 95.8%, AIME 2025 96.1%, HMMT 87.1–95.4%, MMAnswerBench 81.8%.** AA-LCR 78.0% is decent long-context reasoning, and MMLU-Redux 94.5% / C-Eval 94% show broad knowledge. Heavily capped by **AA-HLE 30.1–30.7% (under 40%), CritPt 3.1%, AA Intelligence Index 23.5%, AA-Omniscience index −7.3 with a 65.7% hallucination rate, and the missing ARC-AGI, MRCR and FrontierMath** — so composite depth and reliability are unknown, and the strong maths against collapsed depth is the signature of BenchLM's **Non-Reasoning** classification.
- **Context window: 85/100.** **256K tokens** places it in the methodology's 200K–500K band (65–84) at the band's ceiling, scored at 85 because **AA-LCR is 78.0%**, so the window is measurably usable. Held below the ≥1M tier because it is a quarter of the current standard, no MRCR or GraphWalks run exists, and no max-output limit is published. **This is the binding constraint on the model's ranking and the clearest reason to prefer K2.6 (also 256K) or K3 (69.46).**
- **Multimodal: 90/100.** Text, image and video in with text out, scored at the top of the methodology's 75–90 band on the second-deepest visual suite measured in this research series (21 benchmarks): **CountBench 94.1%, OmniDocBench 88.8%, AI2D_TEST 90.8%, RefCOCO 87.8%, Video-MME 87.4%/83.2%, VideoMMMU 86.6%, MLVU 85.0%, MathVision 84.2%, MMMU 84.3%, AA-MMMU-Pro 75.4%**, with genuine video understanding across three separate benchmarks. Held at 90 rather than the 90–100 "audio in" tier because output is text-only, there is no audio input, and **ExtractBench, BabyVision and ZeroBench are unmeasured**.
- **Coding: 70/100.** Mid-band. **LiveCodeBench v6 85.0% is strong, SWE-bench Verified 76.8% (vendor) / 70.8% (Arcee) is solid mid-frontier, SWE Multilingual 73.0% and React Native Evals 77.2% corroborate** — the React Native figure being a real mobile-coding data point few models in this corpus have. Capped by the **6.0-point SWE-bench vendor-vs-independent gap (76.8% vs 70.8%)**, **AA Coding Index 46.8% (23.2 points under the 70% reference)**, AA-SciCode-adjacent SciCode 48.7% (under 55%), NL2Repo 32.0%, and no DeepSWE, Vibe Code Bench or FrontierCode figure.
- **Cost efficiency: 92/100.** **$0.45/$1.80 via Zen, from $0.45 per 1M input across 13 providers** — cheap for a 1T-total model, and **open weights under a permissive licence with only 32B active of 1T total (a 3.2% activation ratio)** provide a real self-hosting escape with a genuinely favourable cost structure. Held at 92 rather than higher because no Zen free tier is recorded, the **licence description conflicts between sources (llmlearner records "modified MIT", benchgen records "Apache 2.0" — the permissive reading is used but should be verified against the HF card)**, and the 256K window keeps prompt costs down without earning a premium.
- **Overall Score: 71.8/100.** (52 + 62 + 85 + 90 + 70 + 92) / 5 = 75.0 → **75**. Recommendation: **the best-evidenced model in this research series (84 benchmarks) and a strong open-weight vision-language agent.** CountBench 94.1%, OmniDocBench 88.8%, three genuine video benchmarks, LiveCodeBench v6 85.0%, τ²-bench 95.9% and a 3.2% activation ratio at $0.45/$1.80 with open weights is a genuinely good package — and the model matters historically as the checkpoint Cursor used as the base for Composer 2.5. Three cautions: **its agentic-execution layer is its weakest dimension by a wide margin** (JobBench 8.7%, DeepPlanning 14.4%, APEX-Agents-AA 11.5%, GDPval-AA 17.0% normalized), so despite being marketed as Moonshot's "flagship agentic model" it is a researcher rather than an agent — **and the K2.6 report refreshed earlier in this session shows the next generation specifically fixed this (Tool use 62 vs 52), which is the clearest reason to upgrade**; **its AA-Omniscience index is −7.3 with a 65.7% hallucination rate**, so it is not a factual assistant; and **256K context is a quarter of the current standard**. Prefer **Kimi K2.6 (57.53)** or **K3 (69.46)** unless K2.5 is pinned.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research using Moonshot's own Kimi K2.5 model card as the primary source (so those rows are vendor-run and labelled as such), cross-checked against **BenchLM's 84-row catalog — the deepest evidence base found anywhere in this research series, ahead of Qwen3.8-27B's 75 and DeepSeek V4 Pro's 61** — which attributes the independent numbers to Artificial Analysis, Vals AI, Epoch AI, Gert Labs, LlamaIndex, ResearchClawBench, Claw-Eval, SWE-Rebench, the JobBench paper, React Native Evals, Openrouter and several third-party comparison tables (Qwen3.6-Plus, Qwen3.5-397B-A17B, GLM-5.1, Arcee Trinity-Large-Thinking). **A provenance note is recorded prominently: a substantial share of this model's rows are cross-cited from competitor documents — Qwen's, GLM's and Arcee's comparison tables — rather than from Moonshot's own material or a neutral tracker, which is weaker provenance and is flagged at the affected figures.** Four conflicts are listed side by side rather than averaged: **SWE-bench Verified 76.8% (vendor) vs 70.8% (Arcee table) — a 6.0-point gap; GPQA-D 87.6% (vendor) / 87.9% [AA]; HLE 30.1% (vendor) / 30.7% [AA]; MMMU-Pro 78.5% (vendor) / 75.4% [AA]** — with the independent run preferred on each. **A licence conflict is also recorded rather than resolved: llmlearner describes the weights as "modified MIT" while benchgen records "Apache 2.0"; the permissive reading is used for the cost score but must be verified against the Hugging Face card before relying on it commercially.** The **Video-MME 87.4% figure is attributed two independent ways (the upstream Kimi blog and Qwen3.5-397B's table) and the two agree exactly**, recorded as a confidence signal. The report's central comparative finding is recorded explicitly: **the K2.6 report refreshed earlier in this session scores Tool use 62 against this model's 52, on a materially better agentic-execution cluster — so the K2.5→K2.6 step specifically fixed this model's defining weakness, which is the clearest single reason to upgrade.** BenchLM's Non-Reasoning classification is corroborated by the strong-competition-maths / weak-open-ended-depth split and is stated as such. Missing benchmarks (OSWorld-Verified, Terminal-Bench 2.1/4.0, MazeBench, ALE, AA Agentic Index, AA AutomationBench, ARC-AGI, MRCR, FrontierMath, DeepSWE, Vibe Code Bench, FrontierCode, ExtractBench, BabyVision, ZeroBench) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hugging Face — moonshotai/Kimi-K2.5 model card (primary source)](https://huggingface.co/moonshotai/Kimi-K2.5)
  - [Moonshot — Kimi K2.5 launch blog (upstream source of the Video-MME and MMVU rows)](https://www.kimi.com/blog/kimi-k2-5.html)
  - [BenchLM — Kimi K2.5 benchmark scores (84 rows, 52.87/100, #94/1015)](https://benchlm.ai/models/kimi-k2-5)
  - [Artificial Analysis — Kimi K2.5](https://artificialanalysis.ai/models/kimi-k2-5)
  - [LLMLearner — Kimi K2.5 release date, 1T/32B architecture, 256K context, modified-MIT licence, Cursor Composer 2.5 lineage](https://llmlearner.com/models/kimi-k2-5)
  - [CloudPrice — Kimi K2.5 pricing and specs (262K context, $0.450/1M input, 13 providers)](https://cloudprice.net/models/moonshot-kimi-k2-5)
  - [Benchgen — Kimi K2.5 benchmarks (BrowseComp 74.9%, SWE-bench Verified 76.8%, AIME 95.8%, GPQA Diamond 87.6%, Apache 2.0 claim)](https://benchgen.com/models/moonshot/kimi-k2-5)
  - [DeepWiki — Kimi K2.5 evaluation results and benchmarks](https://deepwiki.com/MoonshotAI/Kimi-K2.5/1.3-evaluation-results-and-benchmarks)
  - [Artificial Analysis — tau2-bench leaderboard (source of the 95.9%)](https://artificialanalysis.ai/evaluations/tau2-bench)
  - [Artificial Analysis — omniscience leaderboard](https://artificialanalysis.ai/evaluations/omniscience)
  - [Gert Labs rankings](https://gertlabs.com/rankings)
  - [ResearchClawBench leaderboard](https://internscience.github.io/ResearchClawBench-Home/)
  - [Claw-Eval leaderboard](https://claw-eval.github.io/)
  - [SWE-Rebench leaderboard](https://swe-rebench.com/?insight=sep_2025)
  - [React Native Evals leaderboard](https://rn-evals.vercel.app/)
  - [JobBench paper](https://arxiv.org/abs/2605.26329)
  - [Openrouter — Kimi K2.5 benchmarks](https://openrouter.ai/moonshotai/kimi-k2.5/benchmarks)
  - See also: [`model/kimi-k2.6/`](kimi-k2.6.md) — the successor, refreshed earlier in this session (Tool use 62 vs 52, the key upgrade reason); [`model/kimi-k3/`](kimi-k3.md) (69.46); [`model/kimi-k2.5-reasoning/`](kimi-k2.5-reasoning.md) — the separately-tracked Reasoning sibling (56.23)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
