# GLM 5.2 — findings by GLM 5.3 Flash

- Source: Z.AI (`glm-5.2`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.2 (Z.AI's flagship GLM-5 series model of June 2026; a lighter "GLM-5.2 Fast" variant exists)
- **Short description:** 744B-param sparse MoE (40B active) built for agentic engineering and long-horizon coding, with the standout being a **1M-token context window** (~5× the 5.1 generation's 200K) plus IndexShare sparse attention that cuts per-token compute 2.9× at full 1M while preserving long-range recall. MIT open weights.
- **Provider / access:** Z.AI API (`glm-5.1`-style Chat Completions at `api.z.ai`); OpenCode Zen lists `opencode/glm-5.2` with a free Zen tier (repo catalog); 18 gateway routes on opper (Alibaba, DeepInfra, DigitalOcean, Fireworks, Novita, Perplexity, etc.); open weights on Hugging Face.
- **Release / knowledge:** released 2026-06-16 (opper: 70 days after GLM 5.1). Knowledge cutoff not verified in this pass.
- **IDs:** `glm-5.2` (Z.AI) / `opencode/glm-5.2` (Zen — free tier available per repo catalog).
- **Context window:** 1,000,000-token input (Z.ai/opper; IndexShare designed for full-1M operation), ~131K max output. Note: OpenCode Zen's curated meta still lists a 204K serve window — verify the Zen-side cap before long-context work.
- **Modalities:** text in / text out (repo catalog; GLM-5 series text convention). Thinking-effort levels High and Max; tools, structured output, caching.
- **Pricing (as of 2026-09-18):** Z.AI route $1.40 in / $4.40 out per 1M (cache $0.26); cheap routes from $0.70/$2.20 (DigitalOcean) and $0.75/$2.40 (DeepInfra) — opper route table. Free Zen tier available (repo catalog).
- **Architecture:** sparse MoE, 744B total / 40B active, MIT license, self-hostable; IndexShare shares one indexer across every four attention layers (2.9× per-token compute reduction at 1M, Z.ai claim).

### Raw benchmarks found

Agent / tool use:

- SWE-bench Pro: **62.1%** — up from 58.4% for GLM-5.1 (Z.ai-reported, via opper)
- Terminal-Bench Hard: **51%** (AA via opper)
- τ²-Bench Telecom: **99%** (AA via opper)
- Output speed 73 tok/s, TTFT 8.53s (AA/opper — the 1M sparse attention trades latency for capability)

Reasoning / knowledge:

- GPQA Diamond: **90%**; HLE: **41%**; IFBench: **73%**; long-context reasoning: **78%** (AA via opper)
- Artificial Analysis Intelligence Index: **34.0** (global rank #62/643, "Strong" tier) (AA via opper)

Coding:

- AA Coding Index: **68.8** (opper)
- SciCode: **51%** (AA via opper)

Long context:

- Window: **1M tokens** native; long-context reasoning 78% measured (AA via opper); MRCR/RULER at window length: no verified public score found

### Normalized scores (1–100)

> Independent derivation per the methodology in `../../model-comparison.md`; Overall = mean of the six.

- **Tool use: 87/100.** τ² Telecom 99 + TB-Hard 51 + SWE-Pro 62.1 with High/Max thinking — a step above GLM-5.1 on every agentic axis; still behind the frontier Flash packages on terminal-coding breadth.
- **Reasoning: 83/100.** GPQA 90 / HLE 41 / AA II 34 — the strongest open-weights reasoning profile measured in this repo's GLM line.
- **Context window: 100/100.** Native 1M with IndexShare built to hold recall at full depth and long-context reasoning 78% measured; 131K output; only the unverified Zen 204K serve cap gives pause.
- **Multimodal: 15/100.** Text-only in and out.
- **Coding: 90/100.** SWE-Pro 62.1 (open-weights frontier), SciCode 51, AA Coding Index 68.8.
- **Cost efficiency: 100/100.** Free Zen tier (repo catalog) plus $1.40/$4.40 list with $0.70/$2.20 third-party routes and MIT self-hosting as floors.
- **Overall Score: 75/100.** Mean: (87 + 83 + 100 + 15 + 90 + 100) / 6 = 475/6 = 79.2 → **79**. Best fit: open-weights 1M-context flagship for repo-scale agents — text-only modality is the one real trade.

---

## Signature

- Provided by: **GLM 5.3 Flash (z.ai/glm-5.3-flash)** — 2026-09-18
- Method: fresh public internet research from zero (opper.ai GLM-5.2 model page with AA benchmark feed, 18-route pricing table and IndexShare architecture notes; Z.ai-reported SWE-bench Pro progression vs GLM-5.1); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
