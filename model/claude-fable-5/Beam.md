# Claude Fable 5 — findings by Beam

- Source: Anthropic/Claude Fable 5, `anthropic/claude-fable-5`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5
- **Short description:** Anthropic's frontier model (Jul 1, 2026 restored after export-control suspension) for ambitious coding and professional work; 5th-generation intelligence at half Fable 5.1's cost. SOTA on Frontier-Bench and GDPval-AA; strong cyber (below Mythos 5).
- **Provider / access:** Anthropic API `claude-fable-5`; AWS Bedrock (restored Jul 1); OpenRouter. Requires 30-day data retention.
- **Release / knowledge:** Released 2026-06-09 (suspended Jun 12, restored Jul 1); knowledge cutoff not stated.
- **IDs:** `anthropic/claude-fable-5`
- **Context window:** 1,000,000+ tokens; max output not stated (128K-class).
- **Modalities:** text, image, file in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-10-17):** $10.00 / 1M input, $50.00 / 1M output; paid.
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **75.9** (#6/128)
- Terminal-Bench 3.0: **34.0%**
- Terminal-Bench 2.1: **84.3%**
- OSWorld-Verified: **85%**
- Terminal-Bench 2.1 (Vals): **80.5%**
- ApprenticeBench: **34%**; MazeBench: **11%**
- GDPval-AA: **1747 Elo**
- BrowseComp: coming soon
- HLE w/ tools: coming soon
- DeepSearchQA: coming soon

Reasoning / knowledge:

- ARC-AGI-1: **98.50%**; ARC-AGI-2: **89.2%**
- FrontierMath v2 (Tiers 1-3): **87.018%**; Tier 4: **90.200%**
- GPQA Diamond (Vals): **93.2%**
- MMLU-Pro (Vals): **91.5%**
- HLE: not individually reported (Fable 5.1 HLE 65%)
- AA Intelligence Index: not individually reported

Coding:

- SWE-bench Verified: **95%**
- SWE-bench Pro: **80%**
- FrontierSWE v2: **47.0%**
- FrontierCode 1.1 Main: **53.5%**
- CursorBench 3.2: **70.5%**; CursorBench 3.1: **70.6%**
- VulcanBench v3: **89.5%**
- Coding public-lane (BenchLM): **71.3** (#7/150)

Long context:

- 1M+ window; MRCR: no verified public score found.

Multimodal:

- Blueprint-Bench 2: **38.6%**
- OfficeQA Pro: **57.9%**
- Design Arena Website: **1297**

### Normalized scores (1–100)

- **Tool use: 85/100.** Agentic lane #6/128 (75.9), Terminal-Bench 2.1 84.3%, OSWorld-Verified 85%, ApprenticeBench 34%, MazeBench 11%; caps at unverified BrowseComp/DeepSearchQA.
- **Reasoning: 90/100.** ARC-AGI-1 98.5%, ARC-AGI-2 89.2%, FrontierMath Tier4 90.2%, GPQA 93.2%; caps at no published HLE.
- **Context window: 92/100.** 1M+ window; caps at no published MRCR retrieval.
- **Multimodal: 80/100.** Text/image/file in; Blueprint-Bench 2 38.6%, OfficeQA Pro 57.9%.
- **Coding: 88/100.** SWE-bench Verified 95%, SWE-bench Pro 80%, FrontierCode 53.5%, VulcanBench 89.5%; coding lane #7/150 (71.3).
- **Cost efficiency: 60/100.** Premium $10/$50 per 1M.
- **Overall Score: 87/100.** Mean of five quality dims (BenchLM aggregate 81.25); best-fit for frontier coding + reasoning at premium cost (superseded by Fable 5.1).

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Anthropic news/model page, BenchLM, GIGAZINE); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.