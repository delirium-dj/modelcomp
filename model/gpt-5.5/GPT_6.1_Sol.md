# GPT-5.5 — findings by GPT 6.1 Sol

- Source: OpenAI / `gpt-5.5`
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** GPT-5.5
- **Short description:** Standard flagship coding/professional reasoning model, not the separately priced Pro route [S1,S3].
- **Provider / access:** OpenAI Responses and Chat Completions, Batch; tool-rich Responses supports computer use, search, shell, apply_patch, MCP, skills and code interpreter [S1].
- **Release / knowledge:** April 23 announcement, April 24 API update; December 1, 2025 cutoff [S1,S3].
- **IDs:** `gpt-5.5`, `gpt-5.5-2026-04-23`; no verified Free ID.
- **Context window:** 1,050,000 total/128,000 output. Codex launch product cap 400K is a different surface [S1,S3].
- **Modalities:** Text/image input, text output; file tools, structured output, function calling, reasoning none through xhigh; medium default [S1].
- **Pricing (as of 2026-10-16):** $5 input/$0.50 cache/$30 output per million. Above 272K input, full-session input doubles and output 1.5×; regional processing +10% [S1].
- **Architecture:** Proprietary; parameter count not verified. Tool image generation is not native media output [S1].

### Raw benchmarks found
Agent / tool use:
- Vendor xhigh research environment: TB2.0 **82.7%**, GDPval **84.9% wins/ties**, OSWorld-Verified **78.7%**, Toolathlon **55.6%**, BrowseComp **84.4%**, MCP Atlas April update **75.3%**, Tau2 Telecom **98%** original prompts/GPT4.1 user [S3]. GDPval is not AA Elo.
- Vals xhigh/128K default: TB2.1 **76.40% ±0.65**, SkillsBench **62.21% ±4.52**, Finance Agent v2 **51.76% ±0.55**, SRE **3.82% ±1.19**, legal-agent **3.75% ±1.17** [S2]. Benchmark-specific overrides possible.
- Tau3/Claw-Eval/ClawProBench: no verified exact score found.

Reasoning / knowledge:
- Vendor GPQA **93.6%**, HLE **41.4% no tools /52.2% tools**, FrontierMath legacy **51.7% tiers1–3 /35.4% tier4**, ARC2 **85.0%** [S3].
- Vals GPQA **93.18% ±1.29**, MMLU Pro **88.14% ±0.32**, LegalBench **86.52% ±0.41** [S2]. Current profile accuracy **55.93%** has no ranked current Index row; historical April Index **67.8%/#2** is separate [S2].
- Current AA index, CritPt, LCR/MLCR, Omniscience: no exact directly verified figure in this model's inspected sources.

Coding:
- Vendor SWE-Pro **58.6%**, Expert-SWE internal **73.1%** [S3]. Vals SWE **82.60% ±1.70**, LiveCodeBench **85.30% ±1.02**, Vibe v1.1 **69.85% ±4.54**, migration **45.16% ±4.16**, ProgramBench **0.50% ±0.50** [S2]. Exact DeepSWE/SciCode not verified.

Long context / multimodal:
- Vendor MRCR v2 8-needle **81.5% at 256K–512K /74.0% at 512K–1M**; GraphWalks BFS 1M **45.4 F1**, parents 1M **58.5 F1** [S3].
- Vendor MMMU Pro **81.2% no tools /83.2% tools**; Vals **88.27% ±0.77**, distinct harness [S2,S3].

### Evidence comparison and research trail
Three fresh DuckDuckGo queries: `GPT-5.5 official model card`, `GPT-5.5 independent benchmark`, `GPT-5.5 pricing limitations review`; all challenged. Exact docs and Vals fetched; original launch directly inspected earlier in this session, not a peer report [S3]. Pro-column numbers excluded. Vendor TB2.0 and Vals TB2.1 are not one suite. Vendor production-latency/token-efficiency claims are not independent universal savings; Vals profile **220m41s latency** describes its workloads, not chat latency. Strong tests coexist with poor complete-program/legal/SRE results. SWE-Pro memorization caveat appears in vendor table; scores alone do not establish uncontaminated generalization [S3].

### Normalized scores (1–100)
- **Tool use: 88/100.** Broad verified tools and strong old-terminal/professional evidence, capped by weak legal/SRE [S1–S3].
- **Reasoning: 90/100.** HLE/GPQA/ARC demonstrate high reasoning, capped by full-window and real-work gaps [S2,S3].
- **Context window: 95/100.** Official 1.05M, no ≥98% retrieval beyond 512K [S1,S3].
- **Multimodal: 80/100.** Strong image/document understanding; native audio/video/output absent [S1–S3].
- **Coding: 88/100.** Good SWE/Vibe/LiveCode, capped by ProgramBench and imperfect repository resolution [S2,S3].
- **Cost efficiency: 45/100.** Premium $5/$30 and long-context uplift despite caching and workload-specific efficiency [S1].
- **Overall Score: 88/100.** (88 + 90 + 95 + 80 + 88) / 5 = 88.2 → 88. Best fit supervised demanding coding/document agents; cost excluded.

### Sources
- [S1] https://developers.openai.com/api/docs/models/gpt-5.5 — exact primary specs/rates/tools.
- [S2] https://www.vals.ai/models/openai_gpt-5.5 — independent xhigh current results and dated launch snapshot.
- [S3] https://openai.com/index/introducing-gpt-5-5/ — primary launch, directly read during this session; xhigh research-harness labels.

---
## Signature
- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-16
- Method: Independent public-web research, three searches and directly inspected primary/independent evidence; Pro, versions and snapshot results separated. Scores are normalized interpretations, not official vendor scores.
- Future sources: add an independently signed file next to this one using the same headings.
