# Kimi K3 — findings by Laguna XS 2.1

- Source: Moonshot AI (`kimi-k3`)
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** Moonshot AI's flagship and the first announced open 3T-class model (2026-07-16): 2.8T-parameter sparse MoE with native vision/video input and a 1M-token context; open weights on Hugging Face since 2026-07-27 under the custom Kimi K3 License.
- **Provider / access:** Kimi API (`kimi-k3`, OpenAI-SDK compatible), Kimi.com / Kimi Work / Kimi Code (`k3`, `k3-256k` profiles), OpenRouter (`moonshotai/kimi-k3`), Amazon Bedrock (`moonshotai.kimi-k3`, since 2026-09-18), self-host via vLLM/SGLang/TokenSpeed.
- **Release / knowledge:** 2026-07-16 (weights 2026-07-27); knowledge cutoff not published in sources found.
- **IDs:** `kimi-k3` (Kimi API); `moonshotai/kimi-k3` (OpenRouter); `moonshotai.kimi-k3` (Bedrock); `moonshotai/Kimi-K3` (HF weights). No Zen Free ID found.
- **Context window:** 1,048,576 tokens; max output 131,072 default, configurable up to the remaining window. Kimi Code tier limits: 256K on Moderato, 1M on Allegretto+.
- **Modalities:** text, image, video in (MoonViT-V2 401M-param encoder); text out; reasoning always on (`low`/`high`/`max`, default `max` at launch); tool calls yes (incl. required tool choice, dynamic loading); JSON mode + strict JSON Schema yes.
- **Pricing (as of 2026-10-04):** $3.00 / $15.00 per 1M in/out (cache-miss), cache-hit input $0.30 (90% discount, automatic prefix caching); flat across the full 1M window; Bedrock Global $3/$15 (US $3.30/$16.50). No Batch API for k3.
- **Architecture:** 2.8T total / 104B active parameters, Stable LatentMoE (16 of 896 routed experts + 2 shared), 93 layers (69 Kimi Delta Attention + 24 Gated MLA), Attention Residuals; MXFP4 weights / MXFP8 activations; open weights under custom Kimi K3 License (commercial scale conditions).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.3%** (Moonshot, max effort); **85.0%** (Artificial Analysis independent)
- MCP Atlas: **84.2** (Moonshot table via whatllm)
- BrowseComp: **91.2** SOTA (Moonshot; 90.4 with full 1M window, no context management — single-agent)
- GDPval-AA v2: **1686–1687 Elo** (3rd overall, behind Fable 5 Max 1815 and Sol Max 1748)
- AA-Briefcase: **1527** (2nd, behind Fable 5 Max 1587)
- AutomationBench / SpreadsheetBench 2: **34.8** (SpreadsheetBench; Moonshot table)
- AA Agentic Index: **50.1–54.3** (Artificial Analysis)
- Tau3 / Claw-Eval / Toolathon: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (Moonshot; highest published open-weight score at launch)
- HLE Full: **43.5% no tools / 56.0% with tools** (Moonshot); HLE text-only **44.4%** (AA)
- AA Intelligence Index v4.1: **57.1** (#4 tested configuration, behind Fable 5 59.9 and Sol Max 58.9)
- AA-Omniscience Index: **18.4** (AA)
- CritPt / LCR: no verified public score found

Coding:

- Program Bench: **77.8%** (field leader, Moonshot table)
- SWE Marathon: **42.0%** (field leader; Fable 5 35.0, Sol 39.0)
- FrontierSWE: **81.2%** (Moonshot; Fable 86.6 leads, Sol 71.3)
- DeepSWE: **67.5%** (KimiCode harness; 67.3% mini-swe-agent)
- SWE-bench Verified: **67.5%** (HokAI citing AA)
- AA Coding Index: **76.2** (Artificial Analysis)
- Arena.AI Frontend Code Arena: **#1, score 1679** (blind preference, at launch)
- LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found in sources checked

Long context:

- 1,048,576-token window with Kimi Delta Attention designed for full-window recall (Moonshot); BrowseComp 90.4 run single-agent at full 1M without compression; MRCR / RULER / GraphWalks: no verified public score found

Multimodal (supporting): MMMU-Pro **81.6** (Moonshot) / 80.5 (AA); OmniDocBench **91.1**

### Normalized scores (1–100)

- **Tool use: 90/100.** TB 2.1 88.3% (vendor) / 85.0% (independent AA), MCP Atlas 84.2 and BrowseComp 91.2 SOTA meet the frontier refs; capped by GDPval-AA v2 sitting third behind Fable 5 / Sol and missing Tau3/Toolathlon rows.
- **Reasoning: 88/100.** GPQA 93.5% and AA Index 57.1 are frontier-adjacent (Index #4 overall); capped by HLE 43.5% no-tools trailing Fable 5 (53.3) and a weak AA-Omniscience 18.4.
- **Context window: 95/100.** 1,048,576-token window (95–100 tier) with KDA built for full-window recall and a 90.4 BrowseComp at full 1M as supporting evidence; no MRCR-style retrieval number found, so it stays at the tier floor.
- **Multimodal: 85/100.** Native image + video input (75–90 band) backed by MMMU-Pro 81.6 and OmniDocBench 91.1; text-only output caps it.
- **Coding: 88/100.** Leads Program Bench (77.8) and SWE Marathon (42.0), TB 2.1 88.3%, Coding Index 76.2; capped by DeepSWE 67.5% and SWE-bench Verified 67.5% trailing Sol/Fable, plus mostly vendor-run harnesses.
- **Cost efficiency: 62/100.** $3/$15 maps to the ~60 band; lifted by $0.30 cache-hit input with >90% hit rates in coding workloads (effective input cost far below list), tempered by verbose reasoning output (130M tokens across AA's index) and no free tier.
- **Overall Score: 89.2/100.** Mean of (90, 88, 95, 85, 88) = 89.2 — the strongest open-weight frontier option for 1M-context agentic coding and research; route routine traffic to K2.6-class models.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-04
- Method: public internet research (Moonshot launch materials/model card via Benchgen, VentureBeat, whatllm, HokAI, AI Hippo, Graphify, kingy.ai, AI Stack Current; Artificial Analysis indices); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
