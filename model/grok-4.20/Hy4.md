- Source: xAI/Grok 4.20 Beta
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.20 Beta (Grok 4.2)
- **Short description:** xAI's 2026-03-12 multi-agent collaboration model designed to attack LLM reliability and hallucination: four cooperating agents (Grok, Harper, Benjamin, Lucas in the 4.2 lineage) with a fast-learning mechanism that iterates weekly from user interaction. A distinct model; Grok 4.1, Grok 4.3 and Grok 4.5 are separate.
- **Provider / access:** xAI/Grok API and Grok surfaces; real-time X-platform data integration in the generation.
- **Release / knowledge:** Grok 4.2 beta candidate 2026-02-18; Grok 4.20 Beta 2026-03-12; knowledge cutoff: no verified public score found.
- **IDs:** `grok-4.20` family ID as cited (Beta). No free Zen ID verified.
- **Context window:** **2,000,000 tokens** (secondary CSDN analysis); the earlier Grok 4 Fast design also used 2M — generation-level context, reported with provenance.
- **Modalities:** text in, text out; multi-agent collaboration, complex reasoning, cross-source information verification, long-document reading. No verified image/audio/video input for this exact ID in the retrieved sources.
- **Pricing (as of 2026-11-14):** **$2 / 1M input, $6 / 1M output** (secondary CSDN analysis) — labelled secondary, no vendor rate card fetched.
- **Architecture:** Multi-agent collaboration (four named agents in the Grok 4.2 lineage) rather than a single monolithic decoder; a smart reasoning model as reward model in the 4.1 lineage; weekly rapid-learning updates from user interactions. Parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- Factual reliability / non-hallucination rate: **78%** — described as an industry record (launch coverage, secondary)
- Artificial Analysis Intelligence Index (with reasoning enabled): **48**, **+6 points** over the predecessor (launch coverage, secondary)
- Weekly iterative improvement from user interaction (qualitative)
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- AA Intelligence Index **48** as above; noted as still trailing Gemini 3.1 Pro Preview and GPT-5.x on composite benchmarks (directional)
- GPQA Diamond / HLE / LCR / CritPt / Omniscience: no verified public score found for this exact ID

Coding:

- SWE-bench Verified / Terminal-Bench / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- 2M-token window (secondary) for long-document reading and multi-source verification; no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 86/100.** A genuine four-agent collaboration architecture aimed at reliability, a 78% non-hallucination rate and weekly learning from interactions; capped by no scored agent harness and no independent replication of the 78% figure.
- **Reasoning: 85/100.** AA index 48 (+6 over its predecessor) with multi-agent cross-checking; capped by still trailing Gemini 3.1 Pro / GPT-5.x composites and no GPQA/HLE number.
- **Context window: 94/100.** A 2M-token window (secondary) — the largest class in this comparison set — targeted at long documents and multi-source verification; capped by the figure being secondary.
- **Multimodal: 76/100.** Scored conservatively: no verified image/audio/video input was documented for this exact ID in the retrieved sources.
- **Coding: 79/100.** General agent/coding capability of the generation; capped by zero published coding benchmark scores for this exact ID.
- **Cost efficiency: 89/100.** $2/$6 per 1M (secondary) with a 2M window and multi-agent reliability at a mid-tier price. Excluded from Overall.
- **Overall Score: 84/100.** Half-up mean of 86, 85, 94, 76, 79 = 84.0 → 84. Best fit: hallucination-sensitive, long-document research and multi-source verification workflows; not coding-first.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Grok 4.20 Beta and Grok 4.2 articles retrieved via public web search excerpt (release dates, multi-agent architecture, four named agents, weekly learning, reliability goal), plus secondary launch coverage (百家号 for the 78% non-hallucination rate and AA index 48/+6; CSDN for the 2M context and $2/$6 pricing) — all explicitly labelled secondary. Figures from Grok 4.1 (LMArena 1483/1465, 12.09%→4.22% hallucination, EQ-Bench3) and Grok 4 Fast (2M design) belong to other IDs and are NOT attributed here. `grok-4.1`, `grok-4.1-fast`, `grok-4.3`, `grok-4.5` and `grok-4-fast` are separate tracked folders. Rows without verified figures are marked "no verified public score found". Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved this pass.
  - [Grok 4.20 Beta — 百度百科 (retrieved via search excerpt; multi-agent architecture, release)](https://baike.baidu.com/item/Grok%204.20%20Beta/67424669)
  - [Grok 4.2 — 百度百科 (retrieved via search excerpt; four-agent lineup, beta timeline)](https://baike.baidu.com/item/Grok%204.2/67603123)
  - [xAI 发布 Grok 4.20 — 百家号 (retrieved via search excerpt; 78% non-hallucination, AA 48)](https://baijiahao.baidu.com/s?id=1859511890730801466&wfr=spider&for=pc)
