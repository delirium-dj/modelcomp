- Source: Z.ai/GLM-5.3
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3
- **Short description:** Z.ai's 2026-08-14 flagship, a 743B-parameter model adding native multimodal vision to the GLM-5 line with big coding/agent gains (+50% coding over GLM-5.2). A distinct model; GLM-5.3-Flash (320B-A18B, the revealed Ox-Alpha stealth model) and GLM-5.3-FlashX are separate tracked folders, and `glm-5.3-free` / `ox_alpha` are deleted phantom folders per the project identity roster.
- **Provider / access:** Z.ai General API (model ID `glm-5.3`), GLM Coding Plan, ZCode, 千问 AI 平台, Cursor, Amazon Bedrock (2026-10-06, revenue-share), PhanRouter; open weights planned from 2026-08-25.
- **Release / knowledge:** 2026-08-14 (API 2026-08-19); knowledge cutoff: no verified public score found.
- **IDs:** `glm-5.3`. No free Zen ID verified.
- **Context window:** no verified token figure in the retrieved pages — no verified public score found. Explicitly optimised for **ultra-long document processing**.
- **Modalities:** text and image in, text/code out (new multimodal vision capability); ultra-long documents, research reasoning, enterprise agents, coding. No verified audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** **$1.40 / 1M input, $0.26 / 1M cached hit, $4.40 / 1M output** (secondary 51CTO launch analysis); Baike states API pricing unchanged from GLM-5.2. Weighted against Mistral Large 4's AA Coding Agent Index comparison (GLM-5.3 = 49, 15.9M tokens/task) — comparison row, labelled.
- **Architecture:** **743B parameters**, with **IndexShare, SAO and Slime** post-training techniques. Open weights announced.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 3.0: **#1 among open models** (directional rank, no exact score in the retrieved excerpt)
- Agents' Last Exam (CLI): **#1 among open models** (directional rank, no exact score)
- Cybersecurity tasks: better than Claude Mythos 5 (directional)
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Coding and agent capability described as close to Claude Fable 5 (directional)
- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found for this exact ID

Coding:

- Z.ai Code Bench (High): **31.4%** accuracy with ~**50,000 output tokens**, beating Claude Opus 4.8's best-effort **29.5%** at ~**120,000 tokens** (secondary 51CTO / Zhihu launch analyses)
- Coding capability **+50%** over GLM-5.2 (vendor claim, relative)
- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE / FrontierSWE: no verified public score found

Long context:

- Ultra-long document processing optimisation; no MRCR / RULER / GraphWalks figure found — no verified public score found

Note: a direct WebFetch of the Baike GLM-5.3 page returned a Baidu security-verification interstitial, so that article's figures are cited from the retrieved search excerpt instead; no local repository file was substituted.

### Normalized scores (1–100)

- **Tool use: 88/100.** #1 among open models on Terminal-Bench 3.0 and Agents' Last Exam (CLI), a +50% coding gain, and broad enterprise/cloud distribution; capped by those ranks being directional without exact scores.
- **Reasoning: 85/100.** Research-reasoning and ultra-long-document optimisation with 743B params; capped by no published numeric reasoning benchmark for this exact ID.
- **Context window: 86/100.** Explicit ultra-long-document optimisation; capped by no verified token window and no retrieval benchmark.
- **Multimodal: 85/100.** New native vision capability (the community's top pre-launch request, from a 400K-view public consultation); capped by text/code-only output, no verified audio/video input, and no multimodal benchmark score.
- **Coding: 89/100.** Z.ai Code Bench 31.4% at 2.4x better token efficiency than Opus 4.8, plus #1 open-model Terminal-Bench 3.0 standing; capped by the figure being a vendor-internal benchmark reported in secondary sources.
- **Cost efficiency: 90/100.** $1.40/$4.40 per 1M with $0.26 cache hits (unchanged from GLM-5.2), open weights and ~2.4x better token efficiency than Opus 4.8 on the Code Bench. Excluded from Overall.
- **Overall Score: 87/100.** Half-up mean of 88, 85, 86, 85, 89 = 86.6 → 87. Best fit: cost-sensitive enterprise coding/agent workloads with long documents and native vision, especially self-hosted after the weight release.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike GLM-5.3 article retrieved via public web search excerpt (release, 743B params, IndexShare/SAO/Slime, vision, +50% coding, open-model #1 ranks, API/platform rollout) plus secondary 51CTO / Zhihu launch analyses for the Z.ai Code Bench 31.4% and $1.40/$0.26/$4.40 rate card — explicitly labelled secondary. A direct re-fetch of the Baike page hit a Baidu security-verification interstitial; the article's content is therefore cited from the retrieved search excerpt, with no local repo file substituted. Identity handling follows the project's generated roster: `glm-5.3-free` and `ox_alpha` are deleted phantom folders, and `glm-5.3-flash-x` is a merged duplicate — none is scaffolded or written. Directional ranks are not assigned numeric scores. Rows without verified figures are marked "no verified public score found". Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved this pass.
  - [GLM-5.3 — 百度百科 (retrieved via search excerpt; specs, benchmarks, rollout)](https://baike.baidu.com/item/GLM-5.3/68244961)
  - [GLM-5.3 正式上线 — 51CTO (retrieved via search excerpt; pricing, Z.ai Code Bench)](https://blog.51cto.com/u_17517821/14887416)
