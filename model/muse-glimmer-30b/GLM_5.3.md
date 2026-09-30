# Muse Glimmer 30B — findings by GLM 5.3

- Source: Meta (`muse-glimmer-30b`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Glimmer 30B
- **Short description:** Meta's open-weights 30B Muse-family model with reasoning and image understanding — a compact agent/coding base below the Muse Spark flagship line. Top use case: self-hosted agentic coding and GUI/document understanding.
- **Provider / access:** open weights (BenchLM lists Source Type "Open Weight"); no OpenCode Zen listing found in the current Zen endpoint/pricing tables.
- **Release / knowledge:** release date not re-verified publicly; knowledge cutoff not stated.
- **IDs:** `muse-glimmer-30b` (no OpenCode Zen Free ID found).
- **Context window:** 131K (BenchLM model page).
- **Modalities:** text and image in / text out (image input verified by MMMU-Pro 74%, CharXiv 78.8%, ScreenSpot Pro 75.4%, OmniDocBench 75.8% rows; Qwen's vendor comparison table lists MathVision 65.5% and RealWorldQA 73.9% for this model); reasoning yes; tool calls yes (MCP Atlas coverage); JSON mode not separately verified.
- **Pricing (as of 2026-09-25):** open weights — $0 self-host license for a 30B-class model; no hosted per-token price verified (absent from Zen).
- **Architecture:** open weights; parameters 30B (dense or MoE split undisclosed in sources found).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **51.7%** (BenchLM; confirmed by Qwen3.8-27B vendor comparison table "Terminus")
- MCP Atlas: **75.5%** (BenchLM)
- DeepSearchQA: **74.6%** (BenchLM)
- OSWorld-Verified: **65.9%** (BenchLM; confirmed in Qwen vendor table)
- skillsBench: **44.3%** (BenchLM)
- GDPval-AA: **893 Elo** (BenchLM; normalized field 13.7%)
- AA EnterpriseOps-Gym **34.7%**, AA Agentic Index **10.5%** (BenchLM)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- Claw-Eval / Toolathlon / SWE Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **83.5%** (BenchLM, AA-GPQA; confirmed in Qwen vendor table)
- HLE: **22.0%** (BenchLM, AA-HLE; confirmed in Qwen vendor table)
- LCR / MLCR: AA-LCR **83.3%** (BenchLM); MLCR-AA **20.0%** (BenchLM)
- CritPt: **2.6%** (BenchLM)
- AIME26: **94.7%** (BenchLM)
- Artificial Analysis Intelligence Index: **17.5** (BenchLM)
- Omniscience: Index **-32.8**, Accuracy **27.0%**, hallucination-rate field **81.9%** (BenchLM; label ambiguous vs AA's "Non-Hallucination Rate" — flagged, not double-counted)
- IFBench: **77%** (BenchLM)

Coding:

- SWE-bench Verified: **76%** (BenchLM)
- SWE-bench Pro: **51.2%** (BenchLM; confirmed in Qwen vendor table)
- SciCode **43.6%** / AA-SciCode **44.9%** / AA Coding Index **49.0%** (BenchLM)
- LiveCodeBench / Vibe Code Bench / DeepSWE: **no verified public score found**

Long context:

- AA-LCR 83.3% (BenchLM) at the 131K window; no MRCR/RULER per-length data — no long-context retrieval score found.

### Normalized scores (1–100)

- **Tool use: 62/100.** MCP Atlas 75.5% and DeepSearchQA 74.6% are strong, OSWorld 65.9% solid; GDPval-AA 893 is bottom-mid and AA Agentic Index 10.5% with TB 2.1 51.7% cap it below the leaders.
- **Reasoning: 63/100.** GPQA 83.5%, AIME26 94.7% and AA-LCR 83.3% are competitive, but HLE 22%, CritPt 2.6%, an AA Index of 17.5 and a -32.8 Omniscience Index (poor knowledge reliability) hold it mid-band.
- **Context window: 54/100.** 131K verified sits in the 100K–200K tier (50–64 band).
- **Multimodal: 68/100.** Text+image in, text out (image tier 60–70) with strong document/chart vision (CharXiv 78.8%, OmniDocBench 75.8%, ScreenSpot Pro 75.4%); no video/audio input or non-text output.
- **Coding: 64/100.** SWE-bench Verified 76% is respectable for a 30B open model, but SWE-bench Pro 51.2%, TB 2.1 51.7% and AA Coding Index 49% sit below frontier agentic coding.
- **Cost efficiency: 88/100.** Open weights at 30B scale are cheap to self-host ($0 license, single-node); no verified hosted price prevents higher.
- **Overall Score: 62/100.** Half-up mean of the five quality dims (62+63+54+68+64)/5 = 62.2 → 62 — a solid self-hostable agent/vision base for its size; the 131K window and weak knowledge reliability are the main limits.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-25
- Method: public internet research (BenchLM, Qwen3.8-27B vendor comparison table); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
