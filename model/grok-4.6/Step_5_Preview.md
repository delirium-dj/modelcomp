# Grok 4.6 — findings by Step 5 Preview

- Source: xAI (`xai/grok-4.6`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.6. The predecessor of **Grok 4.7** (BenchLM unranked, newer) and successor to Grok 4.5 (63.03). BenchLM scores it **66.69/100, #23 of 1,014** — a modest 3.66-point generational gain, the smallest step-up in the Grok 4.x line.
- **Short description:** xAI's flagship upgrade for long-running agents, and the standout feature of this batch is that **Grok 4.6 clears two of the three tool-use frontier references simultaneously** (AA Terminal-Bench 2.1 88.4%, AA Tau3 Banking 50.7%, GDPval-AA 1,643 Elo) while carrying the **second-best hallucination rate in this research series (34.3%)**. Its weaknesses are concentrated in the newest agentic harnesses (Terminal-Bench 3.0 26.5%, MazeBench 1%, FrontierSWE v2 25.3%) and in abstract reasoning (ARC-AGI-1 87.0%, ARC-AGI-2 67.1%).
- **Provider / access:** xAI's own API, Cloudflare, Vercel AI Gateway, OpenRouter — and notably **through Cursor and Build**, which the repo's meta.json flags as the primary adoption route ("Access flows through partner surfaces rather than a broad first-party API"). Also on OpenCode Zen (`xai/grok-4.6`, paid).
- **Release / knowledge:** release date not restated; Grok 4.6 sits between 4.5 (63.03) and 4.7 in xAI's 2026 line. **Knowledge cutoff not disclosed.**
- **IDs:** `xai/grok-4.6` (xAI, Zen); `x-ai/grok-4.6` (Openrouter).
- **Context window:** **500,000 tokens** — half the 1M standard of the current frontier, and the reason this model cannot score in the top context tier.
- **Modalities:** **text and image in; text out** (repo meta.json + BenchLM agree). Note xAI's separate **Grok 4.6 Fast** and **Grok 4.6 Multi-agent** variants are tracked as their own folders.
- **Pricing (as of 2026-11-05):** **$2 input / $6 output per 1M with $0.50 cached reads below a 200K prompt**, and **$4 / $12 / $1 above 200K** — a doubling at the 200K mark, so the 500K window is economically priced out for all but short prompts. No Free ID.
- **Architecture:** proprietary, closed weights; parameter count undisclosed.

### Raw benchmarks found

xAI's Grok 4.6 launch post is the primary source (so its rows are **vendor-run**), with Artificial Analysis, Vals AI, ARC Prize, Epoch AI, Cognition, Cursor, Kaggle, VulcanBench, Collinear, NeoCognition and Openrouter supplying the independent rows. 41 benchmarks total.

Agent / tool use — **the strongest dimension, and one of the best in this research series**:

- **AA Terminal-Bench 2.1: 88.4%** — clears the 88%+ frontier reference; but **Vals measures only 78.3%**, a 10.1-point vendor-vs-independent gap
- **AA Tau3 Banking: 50.7%** — clears the 50%+ frontier reference
- GDPval-AA: **1,643 Elo** (AA) / 55.9% normalized — under the 1,750 frontier reference
- APEX-Agents: 57.5% (vendor); AA Agentic Index: **53.4%**; AA-AnalystAgent: 41.3%; AA EnterpriseOps-Gym: 48.3%
- **Terminal-Bench 3.0: 26.5%**; **MazeBench: 1%**; ApprenticeBench: 13%; **FrontierSWE v2: 25.3%**; CursorBench 4.0: 41.4%
- **MCP-Atlas, OSWorld, BrowseComp, Toolathlon, Claw-Eval, ALE: no verified public score found** — a notable gap given this model's agentic positioning

Reasoning / knowledge:

- **AA-GPQA Diamond: 94.9%** / **94.7%** (Vals) — clears the 90%+ frontier reference on both, and the highest GPQA figure in this batch
- **AA-HLE: 42.9%** — clears the 40%+ frontier reference
- **AA-Omniscience: index 30.5, accuracy 48.2%, hallucination rate 34.3%** — the **second-best hallucination rate in this research series**, behind only Muse Spark 1.2's 33.3%
- AA Intelligence Index: **44.3%**; AA-LCR: **80.3%**; **CritPt: 17.1%**
- ARC-AGI-1: **87.0%**; ARC-AGI-2: **67.1%**; ARC-AGI-3: **2.1%**
- FrontierMath v2 Tiers 1–3: **66.0%**; Tier 4: **31.7%**; MMLU-Pro (Vals): 89.4%
- **MRCR: no verified public score found**
- **Gray Swan indirect prompt injection: 51.8%** — the **second-worst prompt-injection resistance in this research series**, behind only Kimi K3's 52.7%

Coding:

- **SWE-bench (Vals): 95.6%** — the strongest single coding figure in this batch
- **AA Coding Index: 76.8%** — clears the 70%+ frontier reference
- **AA-SciCode: 56.5%** — clears the 55%+ frontier reference; LiveCodeBench (Vals): **88.2%**
- VulcanBench v3: **87.0%**; CursorBench 3.2: 70.8%; FrontierCode 1.1 Extended: 61.3%
- DeepSWE: **65.9%** — 8.1 points under the 74% reference; Bug Hunt Bench: 27.0 fixes
- **SWE-bench Verified: no verified public score found**

### Normalized scores (1–100)

- **Tool use: 88/100.** One of the strongest agentic profiles measured in this research series, and the only model here to clear two of three frontier references: **AA Terminal-Bench 2.1 88.4% and AA Tau3 Banking 50.7%**, with GDPval-AA 1,643 Elo the only reference missed (and missed by 107 Elo). AA Agentic Index 53.4% and APEX-Agents 57.5% corroborate. Capped by the **10.1-point Terminal-Bench vendor gap (88.4% AA vs 78.3% Vals)**, the absence of MCP-Atlas, OSWorld and BrowseComp, and three near-floor results in Terminal-Bench 3.0 26.5%, MazeBench 1% and FrontierSWE v2 25.3%.
- **Reasoning: 84/100.** Mid-band. AA-GPQA Diamond 94.9%/94.7% clears the 90% reference on two harnesses and AA-HLE 42.9% clears the 40% reference, with the **second-best hallucination rate in this research series (34.3%)** a genuine asset. Capped by CritPt 17.1%, FrontierMath Tier 4 31.7%, ARC-AGI-1 87.0% (the lowest ARC-AGI-1 in this batch), ARC-AGI-2 67.1%, ARC-AGI-3 2.1%, AA Intelligence Index 44.3%, and no MRCR figure.
- **Context window: 85/100.** **500,000 tokens** places it in the methodology's 500K–1M tier (85–94), and it is the only sub-1M model in this batch. Held at the tier floor rather than higher because AA-LCR is 80.3%, no MRCR retrieval measurement exists, no max-output limit is published, and — decisively — **the >200K pricing tier doubles input cost**, making the upper half of the window economically impractical.
- **Multimodal: 68/100.** Text + image in with text out places it in the methodology's "+image in" 60–70 band, and the only measured figure is Design Arena **1,287 Elo**, which is mid-tier. **No MMMU-Pro, CharXiv, ExtractBench, BabyVision or ZeroBench figure exists**, so the band is entered on coverage and a single web-design result. Below the visual depth of Gemini 3.7 Flash (92) or Muse Spark 1.1 (92) purely on evidence.
- **Coding: 89/100.** The second-strongest dimension. **SWE-bench 95.6% (Vals) is the strongest single coding figure in this batch, AA Coding Index 76.8% clears the 70% reference, AA-SciCode 56.5% clears the 55% reference**, and VulcanBench v3 87.0% and LiveCodeBench 88.2% corroborate. Capped by DeepSWE 65.9% (8.1 points under the reference), FrontierCode 1.1 Extended 61.3%, CursorBench 4.0 41.4%, FrontierSWE v2 25.3%, and no published SWE-bench Verified figure.
- **Cost efficiency: 72/100.** $2/$0.50/$6 per 1M below a 200K prompt is a mid-frontier card that sits between the methodology's ~$1.25/$4.25 (≈88) and ~$3/$15 (≈60) anchors. Held at 72 rather than 84+ because **the >200K tier doubles input and output cost ($4/$12/$1)**, which effectively makes the advertised 500K window unaffordable for its main use case, and there is no free tier or open-weight escape. Cheaper than every Claude flagship and GPT-6 Astra, but priced out of its own window above 200K.
- **Overall Score: 82.8/100.** (88 + 84 + 85 + 68 + 89) / 5 = 82.8 → **83**. Recommendation: a strong **agentic-coding and tool-use model at mid-frontier pricing** — the only model in this batch to clear two tool-use frontier references (TB2.1 88.4%, Tau3 50.7%), with the series' second-best hallucination rate (34.3%) and SWE-bench 95.6%. Two hard cautions: **its Gray Swan prompt-injection resistance is 51.8%, the second-worst measured anywhere in this research series**, so it must not read untrusted input without an external filter; and **the 500K window doubles in price above 200K**, so treat it as a 200K model in practice.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-05
- Method: re-research using xAI's Grok 4.6 launch post and model documentation as the primary source (so its rows are vendor-run and labelled as such), cross-checked against BenchLM's 41-row catalog (attributing independent numbers to Artificial Analysis, Vals AI, ARC Prize, Epoch AI, Cognition, Cursor, Kaggle, VulcanBench, Collinear, NeoCognition and Openrouter) and the repo's own `meta.json` for the 500K window, modality set and the dual-tier 200K pricing structure. Vendor-vs-independent conflicts are listed side by side — Terminal-Bench 2.1 88.4% vs 78.3% across AA and Vals — rather than averaged. Missing benchmarks (MCP-Atlas, OSWorld, BrowseComp, Toolathlon, Claw-Eval, ALE, SWE-bench Verified, MRCR, and all multimodal benchmarks except Design Arena) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [xAI — Grok 4.6 launch post (primary benchmark source)](https://x.ai/news/grok-4-6)
  - [xAI — Grok 4.6 model documentation](https://docs.x.ai/developers/grok-4-6)
  - [BenchLM — Grok 4.6 benchmark scores (41 rows, 66.69/100, #23/1014)](https://benchlm.ai/models/grok-4-6)
  - [Artificial Analysis — Grok 4.6](https://artificialanalysis.ai/models/grok-4-6)
  - [Vals AI — Grok 4.6 leaderboard results](https://www.vals.ai/models/grok_grok-4.6)
  - [ARC Prize — published semi-private results for Grok 4.6](https://arcprize.org/results/xai-grok-4-6)
  - [Epoch AI — FrontierMath v2 leaderboard](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
