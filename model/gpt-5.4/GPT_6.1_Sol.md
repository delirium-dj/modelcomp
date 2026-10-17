# GPT-5.4 — findings by GPT 6.1 Sol

- Source: OpenAI / `gpt-5.4`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** GPT-5.4
- **Short description:** Standard professional/coding flagship, not Pro or Codex. Scores emphasize explicit reasoning configurations [S1,S2].
- **Provider / access:** OpenAI Responses/Chat Completions, Batch; search/files, computer use, shell, code interpreter, apply_patch, MCP and structured output [S1].
- **Release / knowledge:** March5,2026; August31,2025 cutoff [S1,S2].
- **IDs:** `gpt-5.4`, `gpt-5.4-2026-03-05`; no verified Free API ID.
- **Context window:**1,050,000 total/128,000 output [S1].
- **Modalities:** Text/image input, text output, file tools; none(default)/low/medium/high/xhigh reasoning. External image generation not native output [S1].
- **Pricing (2026-10-17):** $2.50 input/$0.25 cached/$15 output per million; >272K input2×input/1.5×output for full session, regional+10% [S1].
- **Architecture:** Proprietary; parameters unverified.

### Raw benchmarks found
Agent / tool use:
- Vendor standard5.4 xhigh research comparative table: TB2.0 **75.1%**, GDPval **83% wins/ties**, BrowseComp **82.7%**, OSWorld **75%**, MCP Atlas **70.6%**, Toolathlon **54.6%**, Tau2 Telecom **92.8% original prompts** [S3].
- Vals TB2.0 **58.43% ±5.25**, **high** exception despite xhigh profile; SkillsBench **51.71% ±4.72**, legal-agent **0%** [S2]. Claw/Tau3 not verified.
Reasoning / knowledge:
- Vendor GPQA **92.8%**, HLE **39.8% no tools/52.1% tools**, ARC2 **73.3%** [S3]. Vals GPQA **91.67% ±1.91**, MMLU **87.48% ±0.42**, historical ProofBench **56%** [S2]. Current exact AA/CritPt/Omniscience/LCR/MLCR not verified.
Coding:
- Vendor SWE-Pro **57.7%**, Expert-SWE internal **68.5%** [S3]. Vals SWE **78.20% ±1.85**, LiveCode **84.14% ±1.04**, Vibe1.1 **67.42% ±4.84**, migration **34.98% ±4.11**, ProgramBench **0%** [S2]. DeepSWE/SciCode not verified.
Long context / multimodal:
- Vendor MRCRv2 eight-needle **57.5% at256K–512K/36.6% at512K–1M**; GraphWalks BFS1M **9.4 F1** [S3]. Capacity not dependable full-window retrieval.
- Vendor MMMU **81.2% no tools/82.1% tools**, Vals **87.51% ±0.80** [S2,S3].

### Evidence comparison and research trail
Three successful DuckDuckGo queries: `GPT-5.4 official model card`, `GPT-5.4 independent benchmarks`, `GPT-5.4 review pricing limitations`. Direct primary API and independent Vals fetched; primary5.5 comparison directly read this session [S3]. Search reviews are discovery only. Vals high58.43 versus vendor xhigh75.1 TB2.0 differ effort/operator, so no averaged terminal score. Pro results excluded. Profile accuracy60.71% not current ranked Index; March leadership dated. More than1M capacity does not validate review claims of never losing the plot, given measured1M retrieval36.6%. Strong academic/patch results coexist with legal/full-program0%. Initial own assessment, no existing report revised.

### Normalized scores (1–100)
- **Tool use: 82/100.** Useful broad tools/terminal, capped by independent completion gaps [S1–S3].
- **Reasoning: 88/100.** GPQA/HLE/ARC and proof support high reasoning; retrieval and practical gaps cap ceiling [S2,S3].
- **Context window: 95/100.** Official1.05M; no perfect-retrieval bonus [S1,S3].
- **Multimodal: 80/100.** Strong image/document evidence, native audio/video/output absent [S1,S2].
- **Coding: 85/100.** Good SWE/LiveCode/Vibe, capped by ProgramBench/migration [S2].
- **Cost efficiency: 62/100.** $2.50/$15 with caching moderate-premium, long-context fees matter [S1].
- **Overall Score: 86/100.** (82+88+95+80+85)/5=86.0 →86; supervised professional/coding work. Cost excluded.

### Sources
- [S1] https://developers.openai.com/api/docs/models/gpt-5.4 — exact primary specs/defaults/rates.
- [S2] https://www.vals.ai/models/openai_gpt-5.4-2026-03-05 — independent configurations/current and March results.
- [S3] https://openai.com/index/introducing-gpt-5-5/ — standard5.4 primary comparative column, directly inspected this session.

---
## Signature
- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-17
- Method: Independent web research, three searches and direct primary/evaluator comparison; efforts, Pro distinction and retrieval limits explicit. Scores are normalized interpretations, not official vendor scores.
- Future sources: add an independently signed file next to this one using the same headings.
