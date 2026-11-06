# Kimi K2.6 — findings by Step 5 Preview

- Source: Moonshot AI (`moonshotai/Kimi-K2.6`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.6. The predecessor of Kimi K3 (69.46) and K3.1 Pro (75.07), and successor to K2.5 (52.87). BenchLM scores it **57.53/100, #57 of 1,015** — so K2.6 was the generation that took the family from 52.87 to 69.46, the largest single step in its lineage.
- **Short description:** An **open-weight** Moonshot model with the strongest reliability profile in this batch (**AA-Omniscience index 5.3 with a 40.5% hallucination rate — the third-lowest in this research series**) and a genuinely strong research/browsing profile (DeepSearchQA 92.5%, WideResearch 80.8%, BrowseComp 83.2%, V\* 96.9%). Its weaknesses are the **256K window** (a quarter of the current standard) and a mid-tier agentic-execution record (OSWorld 2.0 4.6%, AA Agentic Index 22.1%).
- **Provider / access:** Weights on Hugging Face (`moonshotai/Kimi-K2.6`, open weight), Moonshot's own API, and OpenCode Zen (`moonshotai/kimi-k2-6`) at **$0.95/$4.00 with $0.16 cached reads**. Self-hosting available.
- **Release / knowledge:** release date not restated; the K2.6 generation is Moonshot's 2026 mid-cycle line. **Knowledge cutoff not disclosed.**
- **IDs:** `moonshotai/Kimi-K2.6` (Hugging Face); `moonshotai/kimi-k2-6` (Zen); `kimi_kimi-k2.6` (Vals, ARC).
- **Context window:** **256,000 tokens** (BenchLM) — a quarter of the 1M current standard, and the binding constraint on this model's ranking.
- **Modalities:** **text and image in; text out** (MMMU-Pro 79.4%, CharXiv 80.4%, MathVision 87.4%, V\* 96.9% measured).
- **Pricing (as of 2026-11-05):** **$0.95 input / $0.16 cached / $4.00 output per 1M** — mid-range, above MiniMax M3.1 Flash's $0.15/$0.60 but well below the Claude/GPT flagships. No free tier.
- **Architecture:** **open weight**; parameter count undisclosed.

### Raw benchmarks found

Moonshot's Kimi K2.6 tech blog and model card are the primary source (so those rows are **vendor-run**), with Artificial Analysis, Vals AI, Epoch AI, Cursor, Kaggle-adjacent third parties, Gert Labs, the Claw-Eval and ResearchClawBench leaderboards, the OSWorld 2.0 paper and Openrouter supplying independent rows. 56 benchmarks total.

Agent / tool use — **strong at research, weak at execution**:

- **DeepSearchQA: 92.5%** (vendor); **WideResearch: 80.8%** (vendor); **BrowseComp: 83.2%** (vendor)
- **τ²-bench: 95.9%** [AA] — among the strongest τ²-bench figures in this research series
- OSWorld-Verified: **73.1%**; Toolathlon: 50.0%; terminalBenchHard: 43.9%
- **Claw-Eval: 62.3%** — one of only three measured ClawEval figures in this research series
- GDPval-AA: **1,115 Elo** / 26.9% normalized — far under the 1,750 reference
- **MCP Atlas: 55.9%** — weak; APEX-Agents-AA: 28.5%; **AA Agentic Index: 22.1%**
- **Terminal-Bench 2.0: 66.7%** (vendor) / **Terminal-Bench 2.1 (Vals): 53.6%** — a 13.1-point gap, and both under the 88%+ reference
- ResearchClawBench: 18.0%; **OSWorld 2.0: 4.6%**; Gert Labs: 56.82%
- **τ³-Banking, Terminal-Bench 4.0, JobBench, MazeBench, ALE: no verified public score found**

Reasoning / knowledge — **the best reliability in this batch**:

- **GPQA: 90.5%** (vendor) / **AA-GPQA Diamond 91.1%** — clears the 90%+ reference on both, and AA measures it *higher* than the vendor
- GPQA Diamond (Vals): 89.1% — just under
- HLE: **34.7%** (vendor) / AA-HLE 37.5% — fails the 40%+ reference on both
- **AA-Omniscience: index 5.3, accuracy 32.6%, hallucination rate 40.5%** — the **third-lowest hallucination rate in this research series**, behind Grok 4.7's 20.0% and Grok 4.3's 25.0%
- AA Intelligence Index: **27.0%**; AA-LCR: **81.0%**; **CritPt: 8.0%**
- **AIME26: 96.4%** (vendor); HMMT Feb 2026: **92.7%** (vendor) — strong competition maths
- MMLU-Pro (Vals): 87.6%; AA-IFBench: 76.0%; MMAnswerBench: 86.0%
- FrontierMath v2 Tiers 1–3: **57.2%**; Tier 4: **25.6%**
- **ARC-AGI, MRCR: no verified public score found**

Coding — solid mid-frontier:

- **LiveCodeBench v6: 89.6%** (vendor) / **86.8%** (Vals) — the strongest coding figure
- **SWE-bench Verified: 80.2%** (vendor) / **76.2%** (Vals) — a 4.0-point gap, both mid-frontier
- SWE-bench Pro: **58.6%**; SWE Multilingual: **76.7%**
- **SciCode: 52.2%** (vendor) / **AA-SciCode: 51.5%** — under the 55%+ reference
- **AA Coding Index: 61.8%** — under the 70% reference; Vibe Code Bench: 37.9%; cursorBench 3.1: 47.6%
- **DeepSWE, FrontierCode: no verified public score found**

Multimodal (image-in) — surprisingly strong:

- **V\*: 96.9%** (vendor) — the highest V\* figure in this research series
- **MathVision: 87.4%**; MMMU-Pro: **79.4%** (vendor and AA agree exactly) / 80.1% with Python
- CharXiv: **80.4%**; Design Arena (website): **1,268 Elo**
- **OmniDocBench, ExtractBench, BabyVision, ZeroBench: no verified public score found**

### Normalized scores (1–100)

- **Tool use: 62/100.** Genuinely split, and the split is the model's signature. The research and browsing half is strong — **DeepSearchQA 92.5%, τ²-bench 95.9% [AA], BrowseComp 83.2%, WideResearch 80.8%** — and **Claw-Eval 62.3%** adds a rare third data point. The execution half is not: **Terminal-Bench 2.1 is 53.6% (Vals) against 88%, MCP Atlas is 55.9%, GDPval-AA is 1,115 Elo against 1,750, AA Agentic Index is 22.1% and OSWorld 2.0 is 4.6%.** τ³-Banking, Terminal-Bench 4.0, JobBench, MazeBench and ALE have no figure.
- **Reasoning: 72/100.** Mid-band. **GPQA 89.1–91.1% clears the 90% reference on two of three harnesses** (and AA measures it *above* the vendor, an unusual direction), **AIME26 96.4% and HMMT 92.7%** are strong competition maths, and **AA-LCR 81.0%** is solid. The standout is reliability: **AA-Omniscience hallucination 40.5%, the third-lowest measured in this research series.** Capped by AA-HLE 37.5% (under 40%), CritPt 8.0%, FrontierMath Tier 4 25.6%, AA Intelligence Index 27.0%, and no ARC-AGI or MRCR figure.
- **Context window: 85/100.** **256,000 tokens** places it in the methodology's 200K–500K band (65–84) at the top of that band. Scored at 85 — the band's ceiling — because **AA-LCR is 81.0%**, so the window is measurably usable, and open weights mean the window is not vendor-gated. Held below the ≥1M tier because it is a quarter of the current standard and no MRCR run exists.
- **Multimodal: 84/100.** Text + image in with text out, scored well above the methodology's 60–70 band because the measured visual suite is genuinely strong: **V\* 96.9% (the highest in this series), MathVision 87.4%, MMMU-Pro 79.4–80.1%, CharXiv 80.4%**, with a 1,268-Elo Design Arena. Held at 84 rather than the 75–90 video tier because there is no video input demonstrated, no audio, and output is text-only.
- **Coding: 74/100.** The least-bad tier. **LiveCodeBench 86.8–89.6%** is strong, **SWE-bench Verified 76.2–80.2%** is solid mid-frontier, and SWE Multilingual 76.7% corroborates. Capped by **AA Coding Index 61.8%** (8 points under the 70% reference), SciCode 51.5–52.2% (under 55%), Vibe Code Bench 37.9%, cursorBench 47.6%, and no DeepSWE or FrontierCode figure.
- **Cost efficiency: 85/100.** $0.95/$0.16/$4.00 per 1M sits between the methodology's ~$1.25/$4.25 (≈88) and ~$3/$15 (≈60) anchors — cheap for an open-weight model of this capability, and **open weights provide a real self-hosting escape**. Held at 85 rather than 88 because it is roughly 6x MiniMax M3.1 Flash's input price for a lower index, has no free tier, and the 256K window keeps prompt costs down without earning a premium.
- **Overall Score: 75/100.** (62 + 72 + 85 + 84 + 74) / 5 = 75.4 → **75**. Recommendation: the best **research-and-browsing open-weight model** in this batch — DeepSearchQA 92.5%, τ²-bench 95.9%, BrowseComp 83.2% and V\* 96.9% — with the third-lowest hallucination rate measured in this research series (40.5%), which makes it unusually trustworthy for retrieval-heavy factual work. Two cautions: **its agentic-execution layer is weak** (AA Agentic Index 22.1%, OSWorld 2.0 4.6%) so it is a researcher rather than an agent; and **256K context** is a quarter of the current standard, so long-document work will not fit. Prefer Kimi K3 (69.46) unless the lower price or open weights are decisive.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research using Moonshot's Kimi K2.6 tech blog and model card as the primary source (so those rows are vendor-run and labelled as such), cross-checked against BenchLM's 56-row catalog, which attributes the independent numbers to Artificial Analysis, Vals AI, Epoch AI, Cursor, Gert Labs, the Claw-Eval and ResearchClawBench leaderboards, the OSWorld 2.0 paper and Openrouter. Conflicting figures are listed side by side — Terminal-Bench 2.0 66.7% (vendor, older harness) vs 53.6% (Vals, 2.1 harness); GPQA Diamond 90.5% (vendor) / 91.1% [AA] / 89.1% (Vals); SciCode 52.2% (vendor) / 51.5% [AA] — rather than averaged, with the independent run preferred on each. The unusual case of AA measuring GPQA *above* the vendor is flagged as an evidence-direction fact, and the third-lowest hallucination rate in this research series is attributed rather than presented bare. **Folder-identity note: this report was first written to `model/kimi-k2-6/`, a hyphenated duplicate spelling that the repo's slug-identity rules forbid and that was subsequently removed from disk; it has been rewritten here in the authoritative dotted folder `model/kimi-k2.6/` and the hyphen variant must not be restored.** Missing benchmarks (τ³-Banking, Terminal-Bench 4.0, JobBench, MazeBench, ALE, ARC-AGI, MRCR, DeepSWE, FrontierCode, OmniDocBench, ExtractBench, BabyVision, ZeroBench) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Moonshot AI — Kimi K2.6 tech blog (primary benchmark source)](https://www.kimi.com/blog/kimi-k2-6)
  - [Hugging Face — moonshotai/Kimi-K2.6 model card](https://huggingface.co/moonshotai/Kimi-K2.6)
  - [BenchLM — Kimi K2.6 benchmark scores (56 rows, 57.53/100, #57/1015)](https://benchlm.ai/models/kimi-2-6)
  - [Artificial Analysis — Kimi K2.6](https://artificialanalysis.ai/models/kimi-k2-6)
  - [Vals AI — Kimi K2.6 leaderboard results](https://www.vals.ai/models/kimi_kimi-k2.6)
  - [Epoch AI — FrontierMath v2 leaderboard](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
  - [Gert Labs rankings](https://gertlabs.com/rankings)
  - [Claw-Eval leaderboard](https://claw-eval.github.io/)
  - [OSWorld 2.0 paper](https://arxiv.org/abs/2606.29537)
  - [Openrouter — Kimi K2.6 benchmarks](https://openrouter.ai/moonshotai/kimi-k2.6/benchmarks)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
