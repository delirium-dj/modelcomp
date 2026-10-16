# Kimi K3 — findings by Cat Jam

- Source: Moonshot AI / Kimi K3 (`opencode/kimi-k3`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** Moonshot AI's flagship open-weights MoE (2.8T total / 104B active; 1M context; native text/image/video). Frontier-level coding/agentic performance at mid-tier API pricing; released 2026-07-16 (+ weights 2026-07-27).
- **Provider / access:** Kimi API (`kimi-k3`, OpenAI/Anthropic-compatible), Amazon Bedrock (global/us/in inference profiles), Alibaba Cloud; open weights under Kimi K3 License (1.56 TB MXFP4). Reasoning always on with `reasoning_effort` (low/high/max, default max).
- **Release / knowledge:** Released 2026-07-16 (weights 2026-07-27). Knowledge cutoff not explicitly published in sampled sources (likely early–mid 2026); architecture/training report July 2026.
- **IDs:** `kimi-k3` (Moonshot), `moonshotai/kimi-k3` (OpenRouter), `global.moonshotai.kimi-k3` (Bedrock)
- **Context window:** 1,048,576 tokens; max output 1,048,576 (thinking + output combined). Verified via Moonshot/Hugging Face/Alibaba/Bedrock docs.
- **Modalities:** Text, image, video (also audio?) — official docs: text, image, video input; text output. Tool calling, structured output, prompt caching (explicit on Bedrock).
- **Pricing (as of 2026-10-16):** Official Moonshot $3.00/$15.00 per 1M input/output; cached input $0.30 (90% off); cache write $3.00 (5m) / $6.00 (1h). Alibaba lists $2.827/$14.133. No permanently free tier ($1 minimum top-up for API access); open weights self-host possible. Flex/Priority on Bedrock.
- **Architecture:** Stable LatentMoE 2.8T total / 104B active; 896 experts (16 active); KDA + Gated MLA attention; MXFP4 weights / MXFP8 activations (QAT); 401M MoonViT-V2. Open-weights license (Kimi K3, non-MIT derivative) with extra restrictions for large service providers.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.3%** (Moonshot tech blog) / AA 85% (max)
- Terminal-Bench 4.0: AA 12.6% (low, due to harness); Vals 17.17%
- BrowseComp: **91.2%**
- DeepSearchQA: **95.0%**
- Toolathlon-Verified: **73.2%** (Kimi blog) / AA 55.4% (est)
- MCP Atlas: **84.2%** (Moonshot)
- GDPval-AA v2 Elo: **1686** (AA/Moonshot; mark: 1686) — beats GPT-5.5 (1491) and Opus 4.8 (1593), trails Fable 5 (1747)
- AA-Briefcase v1.1: **1501** (AA) / 1548 (tech report)
- AutomationBench: **30.8%**
- JobBench: 52.9% / 54.3
- APEX-Agents: 37.6%
- CyberGym: 80.1% (benchgap est)

Reasoning / knowledge:

- HLE (no tools / w/ tools): **43.5% / 56.0%** (Moonshot); AA-HLE 46.9%
- GPQA Diamond: **93.5%** (Moonshot / AA)
- AA Intelligence Index (max, v4.3.2): **43.6** (AA, #18/19); 57 at launch vintage (AA article)
- AA-LCR v1.1: **88.7%** (measured)
- CritPt: **23.4%** (AA)
- Omniscience Accuracy / Hallucination: **47.6% / 53.2%** (AA; weak non-hall)
- DeepSWE: 67.5% (Moonshot)
- MMLU: **90.1%** (benchgap); MMLU-Pro 85.7%
- Chat? CharXiv RQ w/ tool 91.3

Coding:

- DeepSWE v1.1: **67.5%** (Moonshot)
- Terminal-Bench 2.1: **88.3%**
- FrontierSWE v2: **81.2%** (Moonshot) / AA 25.9% (different harness)
- ProgramBench: **77.8%**
- Kimi Code Bench v2: 72.9%
- SWE-Marathon: **42.0%**
- SWE-bench Verified: 81.2% (vendor est) / Vals 93.4%
- SWE-bench Pro: 63.3% (benchgap est)
- LiveCodeBench (Vals): 87.2%
- AA-SciCode: 59.5%; SciCode 51.1% est
- AA Coding Index: 76.2%

Long context:

- 1,048,576 tokens (native) — "KDA with prefill cache" for long-context efficiency. Technical report uses 300K context-compaction on BrowseComp. MRCR not in sampled data (no value found).

### Normalized scores (1–100)

- **Tool use: 91/100.** TB2.1 88.3, BrowseComp 91.2, DeepSearchQA 95.0, MCP Atlas 84.2, GDPval 1686, AutomationBench 30.8. Strong agentic/browsing at open cost.
- **Reasoning: 88/100.** HLE 43.5–56.0, GPQA 93.5, AA Index 43.6 (vintage 57), LCR 88.7 strong, CritPt 23.4 caps, Omniscience 47.6/53.2 weak.
- **Context window: 95/100.** 1M native with hybrid linear attention. No published MRCR score caps from perfect.
- **Multimodal: 88/100.** Text/image/video input; text output. CharXiv 91.3 (tools), Video-MME 90.0 (with subs). Good video perception; no audio output.
- **Coding: 88/100.** DeepSWE 67.5, TB2.1 88.3, FrontierSWE 81.2, ProgramBench 77.8, SWE-Marathon 42.0; TB4 weak due to harness.
- **Cost efficiency: 80/100.** $3/$15 per 1M, cache hit 90% off ($0.30); open-weights self-host possible; no free hosted tier but competitive for 2.8T MoE.
- **Overall Score: 90/100.** Mean of (91 + 88 + 95 + 88 + 88) / 5 = 90.0. Best open-weights class leader for long-horizon coding/browsing (July–Oct 2026), behind proprietary flagships on knowledge work.

---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public web research (Moonshot blog/tech report/HF, Artificial Analysis, benchgap, benchlm, AWS/Alibaba docs, felloai, s5labs, raw GitHub); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
