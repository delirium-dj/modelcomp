# Kimi K3 — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-11 (UTC) — second-pass verification
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** Moonshot AI's flagship and the first announced open 3T-class model (2026-07-16): 2.8T-parameter sparse MoE with native vision/video input and a 1M-token context; open weights on Hugging Face since 2026-07-27 under the custom Kimi K3 License.
- **Provider / access:** Kimi API (`kimi-k3`, OpenAI-SDK compatible), Kimi.com / Kimi Work / Kimi Code (`k3`, `k3-256k` profiles), OpenRouter (`moonshotai/kimi-k3`), Amazon Bedrock (`moonshotai.kimi-k3`, since 2026-09-18), self-host via vLLM/SGLang/TokenSpeed.
- **Release / knowledge:** 2026-07-16 (weights 2026-07-27); knowledge cutoff not published in sources found.
- **IDs:** `kimi-k3` (Kimi API); `moonshotai/kimi-k3` (OpenRouter); `moonshotai.kimi-k3` (Bedrock); `moonshotai/Kimi-K3` (HF weights).
- **Context window:** 1,048,576 tokens; max output 131,072 default.
- **Modalities:** text, image, video in; text out; reasoning always on; tool calls yes; JSON mode yes.
- **Pricing:** $3.00 / $15.00 per 1M in/out; cache-hit input $0.30 (90% discount).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.3%** (Moonshot, max effort); **85.0%** (AA independent)
- MCP Atlas: **84.2** (Moonshot)
- BrowseComp: **91.2** SOTA (Moonshot)
- GDPval-AA v2: **1686–1687 Elo** (3rd overall)
- AA-Briefcase: **1527** (2nd)
- AA Agentic Index: **50.1–54.3** (Artificial Analysis)

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (Moonshot; highest open-weight)
- HLE Full: **43.5% no tools / 56.0% with tools** (Moonshot)
- AA Intelligence Index v4.1: **57.1** (#4 tested)
- AA-Omniscience Index: **18.4** (AA)

Coding:

- Program Bench: **77.8%** (Mooonshot)
- SWE Marathon: **42.0%** (Moonshot)
- FrontierSWE: **81.2%** (Moonshot)
- DeepSWE: **67.5%** (KimiCode)
- SWE-bench Verified: **67.5%** (HokAI citing AA)
- AA Coding Index: **76.2** (Artificial Analysis)
- Arena.AI Frontend Code Arena: **#1, score 1679**

Multimodal: MMMU-Pro **81.6** / 80.5 (AA); OmniDocBench **91.1**

### Normalized scores (1–100)

- **Tool use: 90/100.** TB 2.1 88.3% (vendor) / 85.0% (AA), MCP Atlas 84.2 and BrowseComp 91.2 SOTA meet frontier refs.
- **Reasoning: 88/100.** GPQA 93.5% and AA Index 57.1 are frontier-adjacent; capped by HLE 43.5% no-tools.
- **Context window: 95/100.** 1,048,576-token window with KDA for full-window recall; no MRCR number found, so tier floor.
- **Multimodal: 85/100.** Native image + video input (75–90 band) backed by MMMU-Pro 81.6 and OmniDocBench 91.1; text-only caps.
- **Coding: 88/100.** Leads Program Bench (77.8) and SWE Marathon (42.0), TB 2.1 88.3%, Coding Index 76.2; capped by vendor-run harnesses.
- **Cost efficiency: 62/100.** $3/$15 maps to ~60 band; lifted by $0.30 cache-hit with >90% hit rates.
- **Overall Score: 89.2/100.** Mean of (90, 88, 95, 85, 88) = 89.2 — strongest open-weight frontier for 1M-context agentic coding and research.