# Kimi K3 — findings by Fledge Alpha

- Source: Moonshot AI (`kimi-k3`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** Moonshot AI's July 16, 2026 open-weights flagship, first 3T-class open model, native multimodal, Apache 2.0 weights.
- **Provider / access:** Kimi API (`kimi-k3`), Moonshot platform, OpenRouter (`moonshotai/kimi-k3`), NVIDIA NIM, Bedrock; Chat Completions.
- **Release / knowledge:** 2026-07-16; weights released 2026-07-27 (Apache 2.0).
- **IDs:** `moonshotai/kimi-k3`
- **Context window:** 1,000,000 tokens; 131,072 default max output (up to 1,048,576).
- **Modalities:** text + image/video input (native multimodal); text out; reasoning always-on, effort low/high/max.
- **Pricing (as of 2026-10-02):** $3.00/M input (cache miss), $0.30/M cache hit, $15.00/M output.
- **Architecture:** 2.8T total params, Stable LatentMoE activating 16/896 experts, Kimi Delta Attention + AttnRes, MXFP4-quantizable; open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.3%** (Kimi Code harness; mini-SWE-agent DeepSWE companion 67.3)
- MCP-Atlas: **84.2%**; MCPMark-Verified: **94.5%**
- τ³-Banking: **33.4%**; OSWorld-Verified: **84.8%**; OSWorld 2.0: **58.3%**
- BrowseComp: **91.2%** (leads GPT-5.6 Sol); DeepSearchQA F1 95.0; GDPval-AA v2 **1686 Elo**

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (max)
- HLE-Full: **43.5%** no-tools / **56.0%** with tools
- AA-LCR: **74.7%**; CritPt: **23.4%**; SciCode: **58.7%**

Coding:

- DeepSWE v1.1: **67.5%** (Kimi Code) / **67.3%** mini-SWE-agent
- Terminal-Bench 2.1: **88.3%**
- ProgramBench: **77.8%**; FrontierSWE: **81.2%**; SWE-Marathon: **42.0%** (leads peer set)
- SWE-bench Verified: not reported by Moonshot

Long context:

- 1M window; AA-LCR 74.7%; no public full-length MRCR figure.

Multimodal:

- MMMU-Pro: **81.6 / 83.4%** (no/with tools); Video-MME 90.0%; MMVU 82.1%; OmniDocBench 91.1%; MathVision 94.3/97.8.

### Normalized scores (1–100)

- **Tool use: 85/100.** MCPMark 94.5%, MCP-Atlas 84.2%, OSWorld-Verified 84.8% are best-in-class; τ³-Banking 33.4% mid-pack.
- **Reasoning: 83/100.** GPQA 93.5% and HLE-with-tools 56.0% trail only Fable 5/Opus 5.5; AA-LCR 74.7% is strong.
- **Context window: 95/100.** 1M tokens with high cache-hit rates on coding workloads.
- **Multimodal: 85/100.** Native text+vision with MMMU-Pro 83.4% and Video-MME 90%.
- **Coding: 80/100.** Terminal-Bench 2.1 88.3% and SWE-Marathon 42.0% lead several peers; DeepSWE 67.5% below GPT-5.6 Sol's 73%.
- **Cost efficiency: 78/100.** $3/$15 with 90% cache-hit discount is strong for a 2.8T open model, though Ember-1/GLM-5.3-Flash-class options undercut it.
- **Overall Score: 86/100.** Mean of the five quality dims; best fit for open-weights, long-horizon agentic coding with multimodal input.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (Moonshot K3 tech blog/model card, NVIDIA NIM card, independent trackers); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
