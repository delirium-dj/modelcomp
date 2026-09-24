# Kimi K3 — findings by Qwen 3.8 27B

- Source: Moonshot AI (`moonshotai/kimi-k3`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3 (max)
- **Short description:** Moonshot AI's open-weights multimodal MoE flagship (July 2026): 2.8T-parameter MoE (104B active) with a 1M-token window, frontier multimodal/math-vision reasoning, terminal-agent coding, and premium pricing. Successor to the Kimi K2.5 (Feb 2026) / K2.6 (Apr 2026) line; not a variant or alias of any other catalog entry.
- **Provider / access:** 21 API providers (Artificial Analysis listing); first-party Moonshot (Kimi) API over OpenAI-compatible Chat Completions. Not listed on OpenCode Zen (no Free ID, no Zen ID).
- **Release / knowledge:** released 2026-07-16 (AA listing + BenchLM catalog); knowledge cutoff not publicly documented.
- **IDs:** `moonshotai/kimi-k3` (no Free ID exists on OpenCode Zen)
- **Context window:** 1,048,576 input / up to 1M output (vendor-listed on Artificial Analysis; BenchLM catalog documents 1.05M)
- **Modalities:** text + image in (AA-verified; curated "document in" is not AA-verified but consistent with OmniDocBench 91.1%); text out; reasoning: yes; tool calls: yes (measured on agentic benchmarks); JSON mode: not documented
- **Pricing (as of 2026-09-24):** paid — $3.00 in / $15.00 out / $0.30 cached in (90% cache discount) per 1M tokens (AA listing, matches curated meta.json); AA 7:2:1 cache:in:out blend ≈ $2.31/1M
- **Architecture:** MoE, 2.8T total / 104B active; open weights on Hugging Face under the "Kimi K3 License" (commercial use with restrictions); BenchLM catalog marks weight access as pending verification

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.3%** (BenchLM, provider-exact — Moonshot AI launch blog; best verified SWE-2 92.8%)
- Terminal-Bench 2.1 (Vals): **80.9%** (BenchLM, Vals AI verified; best GPT-6 Astra 87.3%)
- BrowseComp: **91.2%** (BenchLM, provider-exact; best Atria Dawn Preview 92.5%)
- DeepSearchQA: **95.0%** (BenchLM; best Atria Dawn Preview 96.0%)
- MCP Atlas: **84.2%** (BenchLM; best Muse Spark 1.1 88.1%)
- DECK-Bench: **73.5%** (BenchLM; Kimi is best listed)
- Toolathlon-Verified: **73.2%** (BenchLM; best Claude Opus 5 80.6%)
- JobBench: **52.9%** (BenchLM; best Muse Spark 1.3 64.9%)
- APEX-Agents: **37.6%** (BenchLM; best Grok 4.6 57.5%)
- SpreadsheetBench 2: **34.8%** (BenchLM; Kimi is best listed)
- AutomationBench: **30.8%** (BenchLM; best DeepSeek V4.1 Flash 54.8%)
- ApprenticeBench: **18.0%** (BenchLM; best Claude Fable 5.1 72.0%)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found (AA evaluates GDPval-AA v2.1 in II but does not publish per-eval values)
- Claw-Eval / ClawProBench: no verified public score found
- SWE Atlas Codebase QnA: no verified public score found
- Agentic category: **70.2/100**, #6/105 (95th pct) (BenchLM category aggregate, 22% weight)

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (BenchLM, provider-exact; best GPT-6 Astra 96.0%)
- GPQA Diamond (Vals): **92.9%** (BenchLM, Vals AI verified; best Gemini 3.1 Pro 95.5%)
- HLE: **56.0%** (BenchLM, provider-exact, 44% reference weight; best Claude Fable 5.1 65.0%)
- HLE w/o tools: **43.5%** (BenchLM; best Claude Opus 5.5 64.4%)
- MMLU-Pro (Vals): **88.0%** (BenchLM, Vals AI verified; best Claude Fable 5.1 92.4%)
- LCR / MLCR: no verified public score found (AA includes AA-LCR v1.1 in II but does not publish per-eval values)
- CritPt: no verified public score found (AA includes CritPt in II but does not publish values)
- Artificial Analysis Intelligence Index: **44**, #3/113 (open-weights class; class median 18) (AA II v4.3.2 — AA-Briefcase v1.1, GDPval-AA v2.1, AutomationBench-AA, Terminal-Bench 4.0, SciCode, HLE, GDP.pdf, CritPt, AA-Omniscience, AA-LCR v1.1)
- BenchLM capability: **72.5/100**, overall rank #11/196 (public), #8/71 (verified)
- Omniscience Accuracy / Hallucination Rate: no verified public score found (AA includes AA-Omniscience in II but does not publish values)

Coding:

- SWE-bench Verified (Vals): **93.4%** (BenchLM, Vals AI verified; best Claude Opus 5 97.0%)
- LiveCodeBench (Vals): **87.2%** (BenchLM, Vals AI verified; best Claude Fable 5.1 90.5%)
- FrontierSWE: **81.2%** (BenchLM; Kimi is best verified listed)
- ProgramBench: **77.8%** (BenchLM; best Claude Opus 5 93.0%)
- VulcanBench v3: **73.7%** (BenchLM; best Grok 4.5 89.9%)
- Kimi Code Bench v2: **72.9%** (BenchLM; Kimi is best listed)
- DeepSWE: **67.5%** (BenchLM, provider-exact; best Muse Spark 1.3 75.4%)
- OpenHarmony Bench v1.0: **57.3%** (BenchLM; best Qwen3.8 Max 60.8%)
- CursorBench 3.2: **60.8%** (BenchLM; best Claude Fable 5.1 73.4%)
- MLS-Bench Lite: **48.3%** (BenchLM; Kimi is best listed)
- sweMarathon: **42.0%** (BenchLM; best Step 5 Preview 72.7%)
- PostTrain Bench: **36.6%** (BenchLM; best GLM-5.3 39.8%)
- FrontierSWE v2: **25.9%** (BenchLM; best verified GPT-6 Astra 65.5%)
- SciCode / AA-SciCode: no verified public score found (AA evaluates SciCode in II but does not publish values)
- Vibe Code Bench: no verified public score found
- Coding category: **63.5/100**, #13/135 (91st pct) (BenchLM category aggregate, 20% weight)

Long context:

- No verified long-context retrieval score found (no public MRCR / RULER / GraphWalks values); 1M input window is vendor-listed (AA), BenchLM documents 1.05M

### Normalized scores (1–100)

- **Tool use: 84/100.** Terminal-Bench 2.1 at 88.3% (provider) / 80.9% (Vals-verified) sits right at the >88% frontier threshold, BrowseComp 91.2% and MCP Atlas 84.2% are strong, and the agentic category ranks #6/105 (70.2, 95th pct); capped below the 90+ frontier band by no verified Tau3 / GDPval-AA scores and a weak long-horizon tail — ApprenticeBench 18.0% and APEX-Agents 37.6%.
- **Reasoning: 86/100.** GPQA Diamond 93.5% (Vals 92.9%) clears the >90% frontier threshold and HLE 56% clears the >40% threshold (MMLU-Pro Vals 88.0%); capped below 90 because the AA Intelligence Index of 44 is under the >60 frontier index and no public LCR / CritPt / Omniscience values exist to confirm.
- **Context window: 95/100.** 1M window (AA vendor-listed; BenchLM 1.05M) is in the ≥1M tier (95–100); capped at 95 because no verified ≥98% long-context retrieval (MRCR / RULER) at 512K+ was found.
- **Multimodal: 70/100.** AA-verified input is text + image with text output — top of the +image (60–70) band: BenchLM multimodal category #1/50 (89.4, 100th pct) with MMMU-Pro 81.6% (w/ Python 83.4%), CharXiv Reasoning 91.3%, MathVision w/ Python 97.8% (best listed), OmniDocBench 91.1% (best verified); capped at 70 because no AA-verified document/video/audio input (curated "document in" unverified, though OmniDocBench suggests it) and no non-text output — the 75+ tiers are unreached.
- **Coding: 78/100.** SWE-bench Verified (Vals) 93.4% and LiveCodeBench (Vals) 87.2% are near-frontier and FrontierSWE 81.2% is the best verified listed, with TB2.1 88.3% supporting agentic coding; capped in the 70s by DeepSWE 67.5% (under the >74% frontier threshold), FrontierSWE v2 25.9%, sweMarathon 42.0%, and no verified public SciCode / Vibe Code Bench values.
- **Cost efficiency: 62/100.** $3.00/$15.00 list sits exactly on the ≈$3/$15 anchor (~60); +2 for the 90% cache discount (cached in $0.30; AA 7:2:1 blend ≈ $2.31/1M) and AA cost rank #28/113 within the open-weights class.
- **Overall Score: 82.6/100.** Mean of the five quality dims (84+86+95+70+78)/5 = 82.6 — best fit: premium open-weights agentic/multimodal workhorse — vision/document reasoning, terminal agentic, and 1M-window long-context coding at a mid-premium price point for its class.

---

## Signature

- Provided by: **Qwen 3.8 27B (qwen-3.8-27b)** — 2026-09-24
- Method: public internet research (Artificial Analysis model page, BenchLM catalog, retrieved 2026-09-24); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.