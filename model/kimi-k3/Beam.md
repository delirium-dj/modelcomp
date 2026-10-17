# Kimi K3 — findings by Beam

- Source: Moonshot AI/Kimi K3, `moonshotai/kimi-k3`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** Moonshot AI's largest open-weight model (Jul 16, 2026): 2.8T params, strong coding and agentic tasks at much lower price than US frontier models. #5 of 226 on BenchLM; multimodal with 1M context.
- **Provider / access:** Moonshot API `kimi-k3`; OpenRouter; HuggingFace (open weights). Batch tier.
- **Release / knowledge:** Released 2026-07-16; knowledge cutoff not stated.
- **IDs:** `moonshotai/kimi-k3`
- **Context window:** 1,000,000 tokens; max output up to 1,048,576 (Vals).
- **Modalities:** text, image in; text out; reasoning yes (max effort); tool calling yes; structured output yes. Open weights.
- **Pricing (as of 2026-10-17):** $3.00 / 1M input, $15.00 / 1M output; paid (open weights self-host).
- **Architecture:** 2.8T params (MoE, ~? active); open weights; 1.02T-class serving variant (MiMo not related). License open.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **69.4** (#10/128)
- Terminal-Bench 2.1: **88.3%**
- Terminal-Bench 2.1 (Vals): **80.9%**
- BrowseComp: **91.2%**
- DeepSearchQA: **95.0%**
- MCP Atlas: **84.2%**
- Toolathlon-Verified: **73.2%**
- AutomationBench: **30.8%**
- JobBench: **52.9%**
- Kimi Claw 24/7: not reported

Reasoning / knowledge:

- ARC-AGI-1: **94.50%**; ARC-AGI-2: **60.4%**
- GPQA: **93.5%**
- MMLU: not individually reported
- AA Intelligence Index: no verified figure found

Coding:

- Coding public-lane (BenchLM): **58.9** (#22/150)
- Kimi Code Bench v2: **72.9%** (#1/2)
- ProgramBench: **77.8%**
- MLS-Bench Lite: **48.3%**
- SWE-bench Verified: not reported (Vals subset 95.10%)
- Vibe Code Bench v1.1: **84.97%**

Long context:

- 1M window; MRCR: no verified public score found.

Multimodal:

- Multimodal public-lane (BenchLM): **92.6** (#1/54)
- MMMU-Pro: **81.6%**; MMMU-Pro w/ Python: **83.4%**
- OfficeQA Pro: **63.3%**

### Normalized scores (1–100)

- **Tool use: 82/100.** Agentic lane #10/128 (69.4), Terminal-Bench 2.1 88.3%, BrowseComp 91.2%, DeepSearchQA 95%, MCP Atlas 84.2%; caps at AutomationBench 30.8%.
- **Reasoning: 80/100.** ARC-AGI-1 94.5%, GPQA 93.5%, ARC-AGI-2 60.4%; caps at no published HLE.
- **Context window: 92/100.** 1M window; caps at no published MRCR retrieval.
- **Multimodal: 90/100.** Text/image in; multimodal lane #1/54 (92.6), MMMU-Pro 81.6%.
- **Coding: 76/100.** Coding lane #22/150 (58.9), Kimi Code Bench 72.9%, ProgramBench 77.8%; caps at unverified SWE-bench Verified.
- **Cost efficiency: 75/100.** Mid-tier $3/$15 per 1M; open weights self-host cheaper.
- **Overall Score: 84/100.** Mean of five quality dims (BenchLM aggregate 69.86); best-fit for open-weight agentic + multimodal at mid cost.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Moonshot/Built In, BenchLM, Vals AI, llm-stats); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.