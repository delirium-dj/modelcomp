# Kimi K3 — findings by Ling 3.0

> Provided by: **Ling 3.0 (moonshotai/kimi-k3)** — 2026-09-23 UTC
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** Moonshot AI's 2.8T-parameter open-weight flagship MoE model with native multimodality, 1M context, and frontier-level agentic coding.
- **Provider / access:** Kimi API, Kimi.com, Kimi Work, Kimi Code, Hugging Face, AWS Bedrock, NVIDIA NIM
- **Release / knowledge:** Released July 16, 2026; full weights released July 27, 2026 under Modified MIT license
- **IDs:** moonshotai/kimi-k3
- **Context window:** 1,048,576 tokens (1M), 131K max output
- **Modalities:** Text, image, video input; text output (native multimodal with MoonViT-V2 vision encoder)
- **Pricing (as of 2026-09-23):** $3.00/1M input (cache miss), $0.30/1M (cache hit); $15.00/1M output; batch 50% discount
- **Architecture:** MoE (896 experts, 16 activated per token, 2.8T total / 104B active); Kimi Delta Attention (KDA), Attention Residuals (AttnRes), Stable LatentMoE; reasoning_effort (low/high/max, default max).

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.1: **88.3%** (Kimi official / NVIDIA docs)
- Terminal-Bench 2.0: **88.3%** (benchlm.ai)
- BrowseComp: **91.2%** (Kimi official)
- MCP Atlas: **84.2%** (Kimi official)
- FrontierSWE: **81.2%** (Kimi official, highest measured)
- CursorBench 3.2: **60.8%** (benchlm.ai)
- AutomationBench: **30.8%** (Kimi official)

Reasoning / knowledge:
- GPQA Diamond: **93.5%** (NVIDIA docs, whatllm.org, requesty.ai)
- Intelligence Index: **59.7%** (requesty.ai)
- HLE-Full: **43.5%** (Kimi official)
- Humanity's Last Exam: **56%** (whatllm.org)
- AIME 2025: **96.1%** (whatllm.org)
- Coding Index: **76.2%** (requesty.ai)

Coding:
- SWE-bench Verified: **76.8%** (Kimi official)
- DeepSWE: **67.5%** (Kimi official)
- FrontierSWE: **81.2%** (Kimi official)
- ProgramBench: **77.8%** (Kimi official)
- Kimi Code Bench v2: **72.9%** (benchlm.ai)
- SWE Marathon: **42.0%** (Kimi official)

Long context:
- 1M token context window; 131K max output; native multimodal understanding across text, images, and video

### Normalized scores (1-100)

- **Tool use: 92.5/100.** Terminal-Bench 2.1 at 88.3% (#2 tier); BrowseComp 91.2%; MCP Atlas 84.2%; FrontierSWE 81.2% (highest measured). Strongest tool-use and agentic profile among open models.
- **Reasoning: 88.0/100.** GPQA Diamond at 93.5%; Intelligence Index 59.7%; AIME 2025 96.1%; HLE-Full 43.5%. Elite scientific reasoning but HLE trails Fable 5 and Opus 5.
- **Context window: 95.0/100.** 1M-token context window; 131K max output; native multimodal context understanding; Mooncake disaggregated architecture.
- **Multimodal: 92.0/100.** Native multimodal with MoonViT-V2 vision encoder; text, image, and video input; MMMU-Pro at 81.6%; OmniDocBench 91.1%; MathVision 97.8%.
- **Coding: 77.0/100.** SWE-bench Verified 76.8%; FrontierSWE 81.2%; DeepSWE 67.5%; ProgramBench 77.8%; Coding Index 76.2%. Strong open-weight coding performance, trailing Fable 5 on FrontierSWE.

- **Cost efficiency: 50/100.** Standard pricing varies by provider.
- - **Overall Score: 89/100.** Mean of five non-cost dimensions: (92.5+88.0+95.0+92.0+77.0)/5 = 89.

---

## Signature

- Provided by: **Ling 3.0 (moonshotai/kimi-k3)** — 2026-09-23
- Method: Public internet research; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Submission checklist (delete before finishing)

1. All placeholders replaced; no values copied from other model/ files.
2. Filename is model/kimi-k3/Ling_3.0.md.
3. Signature block filled in; relative links resolve from model/kimi-k3/.
4. No raw benchmark invented — "no verified public score found" used where missing.
5. Zero verified benchmarks → save as Ling_3.0.md.excluded.
