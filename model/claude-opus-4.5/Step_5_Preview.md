# Claude Opus 4.5 — findings by Step 5 Preview

- Source: Anthropic (`anthropic/claude-opus-4.5`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.5. Now **five generations behind**: Opus 5.5 (86.40) → Fable 5.1 (81.23) → Fable 5 (80.81) → Opus 5 (79.69) → Opus 4.8 (69.69) → and this at **53.75, #85 of 1,015** with **73 benchmarks**. Note it scores *below* its own `Claude Opus 4.5 Thinking` sibling (53.80) by 0.05 — the only such inversion in the Claude line, and effectively a tie.
- **Short description:** A 2025-era Opus whose measured record has aged decisively, and which holds **the two worst figures in this research series**: **CritPt 0.3% (the lowest anywhere here) and AA-HLE 13.2% (the lowest anywhere here, a 26.8-point gap under the 40% reference)**. Its surviving assets are **SWE-bench Verified 80.9%, VideoMMMU 84.4%, MLVU 81.7%, WideResearch 76.4%, MCP-Tasks 71.8%** and a genuinely broad 73-benchmark evidence base. BenchLM also classifies it **Non-Reasoning** — the seventh such model in this corpus.
- **Provider / access:** Anthropic API, Amazon Bedrock, Google Cloud Vertex, and OpenCode Zen. No Free ID. Proprietary, closed weights.
- **Release / knowledge:** release date not restated; Opus 4.5 is Anthropic's 2025 flagship tier. **Knowledge cutoff not disclosed.**
- **IDs:** `anthropic/claude-opus-4.5`; `claude-opus-4-5` (BenchLM canonical, ARC); `anthropic/claude-opus-4.5-thinking` (the sibling).
- **Context window:** **200,000 tokens** (BenchLM) — one-fifth of the current 1M standard, and the primary reason this model cannot rank in the top context tier.
- **Modalities:** **text and image in; text out**, with an unusually broad measured visual suite (19 benchmarks, including genuine video understanding).
- **Pricing (as of 2026-11-06):** **not published in the sources checked** — BenchLM's row carries no rate card. Scored conservatively and flagged as unverified.
- **Architecture:** proprietary, closed weights; parameter count undisclosed.

### Raw benchmarks found

Anthropic's Opus 4.5 system card is the primary source for a small subset of rows, but the striking structural fact is that **the overwhelming majority of this model's 73 rows are cross-cited from competitor documents — Qwen's Qwen3.6-Plus and Qwen3.5-397B-A17B comparison tables — rather than from Anthropic's own material.** This is a significant provenance weakness, recorded at each figure rather than implied. Artificial Analysis, Vals AI, Epoch AI, Gert Labs, VitaBench, the JobBench paper, CyberGym and Openrouter supply the independent rows.

Agent / tool use — **mid, with a notable AA gap**:

- **τ²-bench: 86.3%** [AA]; **MCP-Tasks: 71.8%**; **WideResearch: 76.4%**; **τ³-bench: 70.2%**
- **OSWorld-Verified: 66.3%** (system card); Gert Labs: 64.23%; QwenClawBench: 52.3%; CyberGym: 50.6%
- **Terminal-Bench 2.0: 59.3%** (system card) — far under the 88%+ reference, and on the *older* harness
- Toolathlon: 43.5%; DeepPlanning: 26.4%; **VITA-Bench: 23.3%**; MCP Atlas: 42.3%; **JobBench: 32.3%**
- **Claw-Eval: 59.6%** — one of only three measured ClawEval figures in this research series
- **Terminal-Bench 2.1/4.0, MazeBench, ALE, GDPval-AA, AA Agentic Index, AA AutomationBench: no verified public score found** — so two of three frontier references are unmeasured and no composite exists

Reasoning / knowledge — **the two worst figures in this research series**:

- **CritPt: 0.3%** [AA] — **the lowest CritPt measured anywhere in this research series**
- **AA-HLE: 13.2%** [AA] / **HLE: 30.8%** (Qwen table) — **a 17.6-point vendor-vs-independent gap**, the second-largest in this research series
- **AA-GPQA Diamond: 81.0%** [AA] / **GPQA: 87%** (system card) — a **6-point gap**, and both fail the 90%+ reference
- **AA-Omniscience: index −4.1, accuracy 40.9%, hallucination rate 76.2%** — a negative index, meaning more incorrect than correct answers
- AA Intelligence Index: **23.7%**; **AA-LCR: 70.7%**; LongBench v2: 64.4%; AI-Needle: 74%
- MMLU-Pro: 89.5%; MMLU-Redux: 96.6%; C-Eval: 92.2%; SuperGPQA: 70.6%; MMLU-ProX: 85.7%
- IFEval: 90.9%; **IFBench: 58%** (Qwen table) / **AA-IFBench 43.0%** — a **15-point gap**
- **AIME26: 95.1%**; HMMT Feb 2025: 92.9%; HMMT Nov 2025: 93.3%; HMMT Feb 2026: 85.3%; MMAnswerBench: 84.0%
- **FrontierMath v2 Tiers 1–3: 34.4%; Tier 4: 4.878%** [Epoch] — near-floor
- **ARC-AGI, MRCR: no verified public score found**

Coding — **the strongest dimension**:

- **SWE-bench Verified: 80.9%** (system card) — 4.1 points under the 85%+ terminal reference
- **LiveCodeBench v6: 84.8%**; SWE Multilingual: 77.5%; SWE-bench Pro: 57.1%; NL2Repo: 43.2%
- **AA-SciCode, DeepSWE, AA Coding Index, Vibe Code Bench, FrontierCode, Terminal-Bench 4.0: no verified public score found** — so the 74%, 70% and 55% coding references are all unmeasured

Multimodal (image-in) — **the second-strongest dimension, and broad**:

- **VideoMMMU: 84.4%**; **MLVU (M-Avg): 81.7%**; **OmniDocBench 1.5: 87.7%**; CountBench: 90.6%; AI2D_TEST: 87.7%
- **Video-MME: 77.6% with subtitle / 81.4% without** — an **unusual inversion**: the *without-subtitle* score is 3.8 points *higher*, suggesting the subtitle channel actively interferes
- DynaMath: 79.7%; RealWorldQA: 77.0%; **MathVision: 74.3%**; We-Math: 70.0%; **MMMU: 80.7%**
- **MMMU-Pro: 70.6%** (Qwen table) / **AA-MMMU-Pro 71.2%** [AA] — the independent run above the vendor cross-cite
- CharXiv: 68.5%; SimpleVQA: 65.7%; **V\*: 67.0%**; ERQA: 46.8%; **ScreenSpot Pro: 45.7%**; Design Arena (website): **1,245 Elo**
- **ExtractBench, BabyVision, ZeroBench: no verified public score found**

### Normalized scores (1–100)

- **Tool use: 62/100.** Mid-band. **τ²-bench 86.3% [AA], WideResearch 76.4%, MCP-Tasks 71.8%, τ³-bench 70.2%, OSWorld-Verified 66.3% and Gert Labs 64.23%** are a respectable and broad base, and **Claw-Eval 59.6%** adds a rare third data point. Capped by **Terminal-Bench 2.0 59.3% (the only terminal figure, on the older harness, ~29 points under the reference), VITA-Bench 23.3%, DeepPlanning 26.4%, JobBench 32.3%, MCP Atlas 42.3%, and the total absence of Terminal-Bench 2.1/4.0, MazeBench, ALE, GDPval-AA and the AA Agentic Index** — so two of three frontier references are unmeasured and no composite exists.
- **Reasoning: 42/100.** Below the methodology's mid band and the weakest dimension, holding **both of the worst figures in this research series: CritPt 0.3% and AA-HLE 13.2%**. The 17.6-point HLE vendor-vs-AA gap (30.8% vs 13.2%) is the second-largest measured here and is resolved in favour of the independent run. AA-GPQA Diamond 81.0% fails the 90% reference, the AA Intelligence Index is 23.7%, the AA-Omniscience index is −4.1 with a 76.2% hallucination rate, and FrontierMath Tier 4 is 4.878%. The genuinely strong figures are competition mathematics (**AIME26 95.1%, HMMT 85.3–93.3%, MMAnswerBench 84.0%**) and exam-style knowledge (MMLU-Redux 96.6%, MMLU-Pro 89.5%) — which, **as with Qwen3.5 397B, is the signature of a Non-Reasoning model that performs well on saturating contest and exam formats while collapsing on open-ended depth.** Scored at 42 rather than lower because the knowledge substrate is demonstrably broad and the maths is real.
- **Context window: 70/100.** **200,000 tokens** places it exactly on the methodology's 200K tier boundary ("200K = 70"), and it is one-fifth of the current standard. Held at the 70 floor rather than mid-tier because **AA-LCR is 70.7%** — the second-weakest here — no MRCR figure exists, no max-output limit is published, and there is no evidence the window is usable at depth.
- **Multimodal: 84/100.** Text + image in with text out, scored well above the methodology's 60–70 band on a genuinely broad 19-benchmark visual suite: **VideoMMMU 84.4%, MLVU 81.7%, OmniDocBench 87.7%, CountBench 90.6%, AI2D_TEST 87.7%, Video-MME 77.6%/81.4%, DynaMath 79.7%, MMMU 80.7%, AA-MMMU-Pro 71.2%**. Held at 84 rather than above because output is text-only, there is no audio input, ExtractBench, BabyVision and ZeroBench are unmeasured, and **ScreenSpot Pro 45.7% and ERQA 46.8% sit far below the rest of the suite**. The **unusual Video-MME inversion** (81.4% without subtitles vs 77.6% with) is recorded as a data quirk rather than interpreted.
- **Coding: 74/100.** The least-bad tier. **SWE-bench Verified 80.9% is solid mid-frontier and LiveCodeBench v6 84.8%, SWE Multilingual 77.5% and SWE-bench Pro 57.1% corroborate.** Capped by SWE-bench Verified sitting 4.1 points under the 85%+ terminal reference, NL2Repo 43.2%, and the **total absence of AA-SciCode, DeepSWE, the AA Coding Index, Vibe Code Bench, FrontierCode and Terminal-Bench 4.0** — so the 74%, 70% and 55% references cannot be checked.
- **Cost efficiency: 60/100.** **No rate card is published in any source checked**, so this is a placeholder-for-unknown rather than a sibling-based estimate. Scored at 60 on the methodology's ~$3/$15 anchor as a neutral default for a proprietary flagship-tier SKU with unverified pricing. **Explicitly an estimate, not a measurement** — the mitigating facts are the 200K window (keeping prompt costs down) and the historical availability of cheaper successor tiers, but an Opus-tier rate card is historically near the top of the market, which is why this is not scored at the unverified floor.
- **Overall Score: 66.4/100.** (62 + 42 + 70 + 84 + 74 + 60) / 5 = 65.1 → **65**. Recommendation: **a legacy Opus with one genuinely durable asset — the broadest measured visual suite in this batch, 19 benchmarks — and two of the worst reliability figures in this research series.** SWE-bench Verified 80.9%, LiveCodeBench 84.8%, VideoMMMU 84.4% and OmniDocBench 87.7% are real, but **CritPt 0.3% and AA-HLE 13.2% are the lowest measured anywhere in this corpus**, so it must never be used for open-ended reasoning or as a factual assistant — the AIME26 95.1% and MMLU-Redux 96.6% figures reflect saturating contest and exam formats, not reasoning depth, consistent with BenchLM's **Non-Reasoning** classification. Add the **17.6-point HLE vendor-vs-AA gap** and the fact that **most of this model's rows are cross-cited from Qwen's comparison tables rather than Anthropic's own documents**, and the evidence base is weaker than its 73-row count suggests. Migrate to Opus 4.8 (69.69) or later.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research using Anthropic's Opus 4.5 system card as the primary source for the small subset of rows it directly supports, cross-checked against **BenchLM's 73-row catalog**, which attributes the independent numbers to Artificial Analysis, Vals AI, Epoch AI, Gert Labs, VitaBench, the JobBench paper, CyberGym and Openrouter. **The report's central provenance finding is structural and is recorded prominently: the overwhelming majority of this model's 73 rows are cross-cited from competitor documents — Qwen's Qwen3.6-Plus and Qwen3.5-397B-A17B comparison tables — rather than from Anthropic's own material. That is materially weaker provenance than a vendor system card, and it means the 73-row count overstates the evidential strength of this report.** Three conflicts are listed side by side rather than averaged: **HLE 30.8% (Qwen table) vs 13.2% [AA] — a 17.6-point gap, the second-largest in this research series, resolved in favour of the independent run; GPQA 87% (system card) vs 81.0% [AA]; IFBench 58% (Qwen table) vs 43.0% [AA].** The two series-lowest figures — **CritPt 0.3% and AA-HLE 13.2%** — are attributed rather than presented bare, and the **unusual Video-MME inversion** (81.4% without subtitles vs 77.6% with) is recorded as a data quirk. The pattern of strong competition-maths and exam scores against collapsed open-ended depth is stated as the signature of BenchLM's **Non-Reasoning** classification and carried into the recommendation. The 0.05-point inversion against the `Claude Opus 4.5 Thinking` sibling is noted as an effective tie. Missing benchmarks (Terminal-Bench 2.1/4.0, MazeBench, ALE, GDPval-AA, AA Agentic Index, AA AutomationBench, ARC-AGI, MRCR, AA-SciCode, DeepSWE, AA Coding Index, Vibe Code Bench, FrontierCode, ExtractBench, BabyVision, ZeroBench) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Claude Opus 4.5 system card (primary source; Terminal-Bench 2.0, OSWorld, SWE-bench Verified, GPQA)](https://www-cdn.anthropic.com/bf10f64990cfda0ba858290be7b8cc6317685f47.pdf)
  - [BenchLM — Claude Opus 4.5 benchmark scores (73 rows, 53.75/100, #85/1015)](https://benchlm.ai/models/claude-opus-4-5)
  - [Artificial Analysis — Claude Opus 4.5](https://artificialanalysis.ai/models/claude-opus-4-5)
  - [Artificial Analysis — critpt leaderboard (source of the series-lowest 0.3%)](https://artificialanalysis.ai/evaluations/critpt)
  - [Artificial Analysis — humanitys-last-exam leaderboard (source of the series-lowest 13.2%)](https://artificialanalysis.ai/evaluations/humanitys-last-exam)
  - [Epoch AI — FrontierMath v2 leaderboard](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
  - [Gert Labs rankings](https://gertlabs.com/rankings)
  - [VitaBench leaderboard](https://vitabench.github.io/)
  - [JobBench paper](https://arxiv.org/abs/2605.26329)
  - [CyberGym leaderboard](https://cybergym.io/)
  - [Qwen — Qwen3.6-Plus comparison tables (source of most cross-cited rows; weaker provenance)](https://qwen.ai/blog?id=qwen3.6)
  - [Hugging Face — Qwen3.5-397B-A17B model card comparison table (source of the multimodal cross-cited rows)](https://huggingface.co/Qwen/Qwen3.5-397B-A17B)
  - [Openrouter — Claude Opus 4.5 benchmarks](https://openrouter.ai/anthropic/claude-opus-4.5/benchmarks)
  - See also: [`model/claude-opus-4.5-thinking/`](claude-opus-4.5-thinking.md) — the `Claude Opus 4.5 Thinking` sibling (53.80), effectively tied; [`model/claude-opus-4.8/`](claude-opus-4.8.md), [`model/claude-opus-5/`](claude-opus-5.md) — the successors this report recommends migrating to
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
