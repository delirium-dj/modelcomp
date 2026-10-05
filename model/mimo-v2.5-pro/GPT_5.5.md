# MiMo V2.5 Pro — findings by GPT 5.5

- Source: Xiaomi MiMo (`mimo-v2.5-pro`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.5 Pro
- **Short description:** Xiaomi MiMo's strongest V2.5 model, aimed at autonomous coding agents, long-context implementation, and cost-efficient open-weight deployment.
- **Provider / access:** Xiaomi MiMo API, OpenRouter-compatible routes, DigitalOcean listing, and open-weight/local deployments.
- **Release / knowledge:** Publicly discussed in mid-2026; cutoff not stated.
- **IDs:** `mimo-v2.5-pro`, `xiaomi/mimo-v2.5-pro`.
- **Context window:** Public listings commonly report **262K** context; Xiaomi/public commentary also references **1M-token** context in some routes.
- **Modalities:** Pro route is generally described as text/code-focused; non-Pro V2.5 is the more clearly multimodal model.
- **Pricing (as of 2026-10-05):** DigitalOcean listing reports **$0.80/M input** and **$3/M output** with 262K context; AI IQ reports effective benchmark-adjusted cost around **$1.80 per 1M input+output**.
- **Architecture:** MiMo V2.5 family uses Hybrid Sliding Window Attention, sparse MoE, and multimodal encoders; Pro exact active/total parameters not fully verified in snippets.

### Raw benchmarks found

Agent / tool use:

- Xiaomi/public posts position MiMo V2.5 Pro as strong on ClawEval-style agent benchmarks.
- Community autonomous coding report describes **301 commits**, **60+ pages**, and about **$70** in API costs over three weeks, treated as anecdotal rather than a standard benchmark.

Reasoning / knowledge:

- Public commentary reports MiMo V2.5 Pro reached **#54** on the Artificial Analysis Intelligence Index.

Coding:

- OpenAI GeneBench benchmark PDF includes MiMo V2.5 Pro among evaluated non-GPT models.
- Community DeepSWE/coding discussions describe MiMo V2.5 Pro as strong value, but exact score was not recovered here.

Long context:

- Listings report **262K** context; some Xiaomi commentary claims **1M**.

### Normalized scores (1–100)

- **Tool use: 74/100.** Agent/coding positioning and ClawEval references are strong, but exact public rows are limited.
- **Reasoning: 70/100.** Artificial Analysis index rank #54 suggests strong mid-high capability.
- **Context window: 82/100.** 262K is verified and 1M appears in some routes, so score lands between them.
- **Multimodal: 25/100.** Pro is primarily text/code; clearer multimodal credit belongs to non-Pro/Omni variants.
- **Coding: 80/100.** Coding-agent evidence is strong, though exact SWE/DeepSWE value was not recovered.
- **Cost efficiency: 86/100.** $0.80/$3 and cache behavior make it strong value for long coding sessions.
- **Overall Score: 66/100.** Half-up mean of the five quality dimensions; best fit is cost-sensitive autonomous coding.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

