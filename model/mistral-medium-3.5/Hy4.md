- Source: Mistral AI/Mistral Medium 3.5
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Medium 3.5
- **Short description:** Mistral AI's April 2026 first flagship **merged (dense) model** — 128B parameters unifying instruction following, reasoning and code generation in one weight set, replacing Mistral Medium 3.1 / Magistral in Le Chat and Devstral 2 in the Vibe coding agent. A distinct model; Mistral Large 4 / Small 4 and Medium 3 are separate.
- **Provider / access:** Mistral API, Le Chat, Vibe coding agent, Microsoft Foundry and Copilot Studio (July 2026); weights on ModelScope/Hugging Face (`Mistral-Medium-3.5-128B`).
- **Release / knowledge:** 2026-04; knowledge cutoff: no verified public score found.
- **IDs:** `mistral-medium-3.5` / `Mistral-Medium-3.5-128B`. No free Zen ID verified.
- **Context window:** **256,000 tokens**.
- **Modalities:** text and image in, text out; instruction following, reasoning, code generation, remote agents. No verified audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** **$1.50 / 1M input, $7.50 / 1M output** (secondary CSDN launch coverage) — labelled secondary, no vendor rate card fetched.
- **Architecture:** **128B dense** (not MoE), single merged weight set; no parameter activation count applicable.

### Raw benchmarks found

Agent / tool use:

- Replaced Devstral 2 inside the Vibe coding agent and is deployable as a remote agent in the enterprise stack (adoption, qualitative)
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found for this exact ID

Coding:

- SWE-Bench Verified: **77.6%**
- SWE-bench Pro / Terminal-Bench / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- 256K window; no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 83/100.** A unified instruction/reasoning/code weight set with remote-agent support and Microsoft ecosystem integration; capped by no scored agent harness.
- **Reasoning: 83/100.** 128B dense flagship with reasoning as one of three merged competencies; capped by no published numeric reasoning benchmark for this exact ID.
- **Context window: 86/100.** 256K context on a dense 128B model; capped by no retrieval benchmark.
- **Multimodal: 81/100.** Text + image input; capped by text-only output, no verified audio/video input, and no multimodal benchmark score.
- **Coding: 88/100.** SWE-Bench Verified 77.6% and selection as Vibe's coding-agent core; capped by no Terminal-Bench / LiveCodeBench figure.
- **Cost efficiency: 86/100.** $1.50/$7.50 per 1M (secondary) with open weights for self-hosting; excluded from Overall.
- **Overall Score: 84/100.** Half-up mean of 83, 83, 86, 81, 88 = 84.2 → 84. Best fit: enterprise coding agents and unified instruction/reasoning workloads with a preference for simple dense, self-hostable weights.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Mistral Medium 3.5 article retrieved via public web search excerpt (release, 128B dense, 256K context, modalities, SWE-Bench Verified 77.6%, Le Chat/Vibe/Foundry integrations), the ModelScope model-card excerpt and a secondary CSDN launch article for the $1.50/$7.50 pricing — labelled secondary. Mistral Medium 3's $0.40/$2 pricing and "90% of Claude Sonnet 3.7" claim belong to a different model and are NOT attributed here. Mistral Large 4 / Small 4 / Magistral / Devstral 2 are separate identities, never merged. Rows without verified figures are marked "no verified public score found". Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved this pass.
  - [Mistral Medium 3.5 — 百度百科 (retrieved via search excerpt; specs, SWE-Bench 77.6%)](https://baike.baidu.com/item/Mistral%20Medium%203.5/68733045)
  - [Mistral-Medium-3.5-128B — ModelScope (retrieved via search excerpt; model card)](https://modelscope.cn/models/mistralai/Mistral-Medium-3.5-128B)
