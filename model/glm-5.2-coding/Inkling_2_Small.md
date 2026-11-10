# GLM-5.2 Coding — findings by Fledge Alpha

- Source: Z.ai (`glm-5.2-coding` — same checkpoint as the public `glm-5.2` API/card; the catalog's separate slug reflects an OpenRouter/OpenCode alias for the coding-agent route)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.2 Coding
- **Short description:** Z.ai's June 2026 open-weight coding tier on the 744B-A40B GLM-5 base with IndexShare sparse attention and strong long-horizon agent rows; same weights/rates as the public `glm-5.2` ID.
- **Provider / access:** Z.ai API (`glm-5.2`), GLM Coding Plan (Lite/Pro/Max/Team), OpenRouter, Morph, DeepInfra; MIT weights on Hugging Face.
- **Release / knowledge:** 2026-06-13/16; superseded in the Coding Plan routing layer on 2026-08-18 by GLM-5.3.
- **IDs:** `zai-org/GLM-5.2`
- **Context window:** 1,000,000 tokens (opt-in `glm-5.2[1m]`); 128K max output.
- **Modalities:** Text input/output.
- **Pricing (as of 2026-10-02):** $1.40/M in, $0.26/M cached, $4.40/M out; Coding Plan routes unique GLM-5.2 requests to GLM-5.3 since Aug 18.
- **Architecture:** 744B-A40B MoE, IndexShare sparse attention (2.9x FLOPs cut at 1M), MTP drafter, MIT weights (no language restriction).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **81.0** (Terminus-2, vendor-reported); FrontierSWE: **74.4** (Proximal 1M)
- SWE-Marathon: 13.0; PostTrainBench: 34.3; NL2Repo: **48.9**
- MCP-Atlas (Public Set): **76.8**

Reasoning / knowledge:

- GPQA: **91.2**; AIME 2026: **99.2**; HLE w/Tools: 54.7; MMLU: n/p for this ID

Coding:

- SWE-bench Pro: **62.1** (open-weight frontier at launch); DeepSWE: 46.2 (AA/independent board; the same v1.1 row carries to 5.3's 66.9)
- Terminal-Bench 2.1: 81.0 (vendor); FrontierSWE 74.4; SWE-Marathon 13.0

Multimodal: not supported on this ID.

### Normalized scores (1–100)

- **Tool use: 78/100.** MCP-Atlas 76.8 and Teminal-Bench 2.1 81.0 — solid top-of-class for open weights; SWE-Marathon 13.0 caps the long-horizon row.
- **Reasoning: 80/100.** GPQA 91.2 and AIME 99.2 — open-weight leader at launch.
- **Context window: 93/100.** Full 1M window with IndexShare training; >512K efficiency gain is the architectural differentiator.
- **Multimodal: 15/100.** Text-only.
- **Coding: 82/100.** SWE-bench Pro 62.1 (open-weight #1) and FrontierSWE 74.4 — GLM-5.3 plus 5.3-Flash should dominate new adoption.
- **Cost efficiency: 82/100.** $1.40/$4.40 with MIT weights; effectively free to self-host — but the same rate now serves the stronger GLM-5.3 on the same card, so there is no price reason to start fresh on 5.2 today.
- **Overall Score: 70/100.** Half-up mean of the five non-cost dims: (78+80+93+15+82)/5 = 69.6 → 70.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (Z.ai GLM-5.2 launch post, benchr review, OrcaRouter review, emergent.sh, Datacamp, Morph blog, modelbeats); scores are normalized 1–100, MLaaS scores inherited from the `glm-5.fl` public rows on this file's parent folder.
- Future sources: add a new file next to this one using the same headings.
