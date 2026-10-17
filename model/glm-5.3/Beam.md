# GLM 5.3 — findings by Beam

- Source: Z.AI/GLM 5.3, `zai-org/glm-5.3`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3
- **Short description:** Z.AI's open-weight model (Aug 14, 2026): 1M context. BenchLM 67.87. Terminal-Bench 2.1 88.2%. CyberGym 84.5% (SOTA). DeepSWE 63.4%. Toolathlon 78.4%. AutomationBench 48.8%. Open weights (free). AA Intelligence Index not reported.
- **Provider / access:** Z.AI API; OpenRouter; HuggingFace.
- **Release / knowledge:** Released 2026-08-14; knowledge cutoff not stated.
- **IDs:** `zai-org/glm-5.3`
- **Context window:** 1,000,000 tokens; max output not stated.
- **Modalities:** text, image in (GLM-5.3-Flash is first natively multimodal); text out; reasoning yes; tool calling yes. Open weights (free).
- **Pricing (as of 2026-10-17):** Free ($0/$0) on OpenRouter; self-host.
- **Architecture:** MoE, 1M context, open weights. (GLM-5.3-Flash: 320B total / 18B active, first natively multimodal in GLM-5 series.)

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **70.2** (Supported · #8/128)
- Terminal-Bench 2.1: **88.2%** (Z.AI official)
- terminalBench3: **28.3%** (BenchLM)
- CyberGym: **84.5%** (Z.AI official, SOTA)
- Toolathlon-Verified: **78.4%** (Z.AI official, GLM-5.3-Flash)
- AutomationBench: **48.8%** (Z.AI official, GLM-5.3-Flash)
- Agents' Last Exam: **26.3%** (Z.AI official, GLM-5.3-Flash)
- HLE with tools: **55.3%** / **62.5%** (Z.AI official)
- GDPval-AA v2: **1773** (Z.AI official, GLM-5.3-Flash)
- MCP Atlas: not reported for GLM-5.3
- BrowseComp: not reported for GLM-5.3

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): **80.6** (#13/28)
- GPQA Diamond (Vals): **88.1%** (BenchLM)
- MMLU-Pro (Vals): **86.8%** (BenchLM)
- HLE: not reported for GLM-5.3
- AA Intelligence Index: not reported
- AA-LCR: not reported
- CritPt: not reported

Coding:

- Coding public-lane (BenchLM): **56.4** (Supported · #28/150)
- DeepSWE: **63.4%** (Z.AI official, GLM-5.3-Flash)
- Terminal-Bench 2.1: **88.2%** (Z.AI official)
- NL2Repo: **56.3%** (Z.AI official, GLM-5.3-Flash)
- ProgramBench: **19.0%** (BenchLM)
- Vibe Code Bench: **61.77%** (BenchLM, GLM-5.3)
- SciCode: not reported

Long context:

- 1M window; MRCR: not reported.

Multimodal:

- GLM-5.3: text-only. GLM-5.3-Flash: first natively multimodal in GLM-5 series. Multimodal lane not reported.

### Normalized scores (1–100)

- **Tool use: 76/100.** Agentic lane #8/128 (70.2), Terminal-Bench 2.1 88.2%, CyberGym 84.5%, Toolathlon 78.4%, AutomationBench 48.8%, Agents' Last Exam 26.3%, HLE w/ tools 55.3%/62.5%; caps at Agents' Last Exam 26.3%.
- **Reasoning: 74/100.** GPQA 88.1%, MMLU-Pro 86.8%, reasoning lane #13/28 (80.6); caps at no published HLE/AA Intelligence.
- **Context window: 80/100.** 1M window; caps at no published MRCR.
- **Multimodal: 40/100.** GLM-5.3 text-only; GLM-5.3-Flash first natively multimodal but no verified benchmarks.
- **Coding: 72/100.** DeepSWE 63.4%, Terminal-Bench 2.1 88.2%, Vibe Code 61.77%, ProgramBench 19.0%, coding lane #28/150 (56.4); caps at ProgramBench 19.0%.
- **Cost efficiency: 100/100.** Free (open weights).
- **Overall Score: 68.4/100.** Mean of five quality dims (BenchLM 67.87); best-fit for open-weight agentic coding at zero cost. #8 agentic on BenchLM.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Z.AI official blog, BenchLM, AutoClaw); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. GLM-5.3 is superseded by GLM-5.3-Flash (Aug 26, 2026, first natively multimodal in GLM-5 series). Open weights (free). #8 agentic on BenchLM. CyberGym SOTA (84.5%).<|end|>>2><rfl:parameter name="filePath">
E:\qwik\modelcomp\model\glm-5.3\Beam.md