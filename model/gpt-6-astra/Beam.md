# GPT-6 Astra — findings by Beam

- Source: OpenAI/GPT-6 Astra, `openai/gpt-6-astra`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI's flagship frontier reasoning model (Sep 2, 2026), "world's most intelligent and aligned model"; state of the art on DeepSWE, ARC-AGI-3, FrontierMath Tier 4, and Vals Index among GPT family; strong cybersecurity (ExploitBench 100%) and long context.
- **Provider / access:** OpenAI API `gpt-6-astra` (Chat/Responses, reasoning effort none..max); Microsoft Azure; AWS Bedrock; ChatGPT Plus/Pro/Business/Enterprise.
- **Release / knowledge:** Released 2026-09-02; knowledge cutoff April 30, 2026.
- **IDs:** `openai/gpt-6-astra`
- **Context window:** 1,050,000 tokens; max output 128,000; reasoning effort none/low/medium/high/xhigh/max.
- **Modalities:** text, image in; text out; reasoning yes; tool calling yes; structured output yes; search grounding. No audio/video out.
- **Pricing (as of 2026-10-17):** $10.00 / 1M input, $50.00 / 1M output; paid. Hidden reasoning can carry across calls.
- **Architecture:** proprietary; params undisclosed; trained on >100k GPUs.

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **91.5%**
- OSWorld 2.0: **72.6%**
- Terminal-Bench 2.1 (Vals): **87.3%**
- Terminal-Bench 4.0: **57.90%**
- ApprenticeBench: **68%**
- MazeBench: **23%**
- ExploitBench: **100.0%**; ExploitGym: **42.4%**; ExploitBench (Jun-Aug 2026): **39.0%**
- SRE-Bench: **88.0%** (OpenAI) / 56.87% (Vals)
- Agentic public-lane (BenchLM): **74.8** (#7/128)
- Search Intelligence (Parallel): **70.8** (#7)

Reasoning / knowledge:

- ARC-AGI-1: **98.50%**; ARC-AGI-2: **95%**; ARC-AGI-3: **62.7%**
- FrontierMath v2 Tier 4: **97.600%**
- STEMBench: **2.81**
- GPQA Diamond: **96.0%** (OpenAI/BenchLM)
- HLE: 49.0% (with search, Parallel)
- Artificial Analysis Intelligence Index: no verified figure found

Coding:

- DeepSWE: **74.1%**
- Coding public-lane (BenchLM): **75.5** (#4/150)
- Vibe Code Bench: no verified public score found (coming soon)
- SWE-bench Verified/Pro: no verified public score found (coming soon)
- Terminal-Bench 2.1: no single figure (87.3% Vals)

Long context:

- OpenAI MRCR v2 8-needle 256K-512K: **100.0%**; 512K-1M: **96.3%**
- Context 1.05M; long decode supported.

### Normalized scores (1–100)

- **Tool use: 88/100.** BrowseComp 91.5%, OSWorld 72.6%, Terminal-Bench 2.1 Vals 87.3%, ExploitBench 100%; agentic lane #7/128 (74.8). Caps at Terminal-Bench 4.0 57.9%.
- **Reasoning: 95/100.** ARC-AGI-1 98.5%, ARC-AGI-2 95%, ARC-AGI-3 62.7%, FrontierMath Tier4 97.6%, GPQA 96.0%, STEMBench 2.81; reasoning lane #1/28 (93.3).
- **Context window: 92/100.** 1.05M with MRCR v2 100%/96.3% retrieval.
- **Multimodal: 88/100.** Text/image in, text out; ScreenSpot Pro 92.7%; no video/audio in.
- **Coding: 86/100.** Coding lane #4/150 (75.5), DeepSWE 74.1%; caps at unverified SWE-bench Verified/Pro.
- **Cost efficiency: 60/100.** Premium at $10/$50 per 1M.
- **Overall Score: 90/100.** Mean of five quality dims (BenchLM aggregate 83.87); best-fit for hardest reasoning + coding + cyber at high cost.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (OpenAI announcement, BenchLM, BenchLeader, Parallel AI, DeepLearning.AI, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.