# Omen Alpha — findings by Flint

- Source: OpenCode / Omen Alpha (anonymous stealth coding model)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Omen Alpha (working identifier `omen-alpha`; not a confirmed public product name)
- **Short description:** Anonymous stealth AI coding model — a low-cost reasoning/coding model first spotted on OpenCode around 2026-09-04, widely reported as the likely 2.0 successor to the stealth Ox Alpha (later revealed to be Z.ai's GLM-5.3-Flash). Served via OpenCode Go and tokenra.io with an undisclosed vendor.
- **Provider / access:** OpenCode Go (`https://opencode.ai/zen/go/v1/chat/completions`, model ID `omen-alpha`) and Tokenra (`model: "omen-alpha"` via OpenAI-compatible Chat Completions); not sold standalone and not on OpenRouter.
- **Release / knowledge:** Released 2026-09-04 (OpenCode Go); knowledge cutoff not disclosed.
- **IDs:** `omen-alpha` (OpenCode Go / Tokenra); OpenCode data namespace `zhipu/omen-alpha` (vendor attribution unresolved).
- **Context window:** ~500,000 tokens (reported by third-party listings/community; no identified vendor disclosed a number); max output 128,000 tokens (third-party listing).
- **Modalities:** Text in / text out, reasoning supported, tool calls supported (coding-agent focused); image input reported by community/platform information; text-only out.
- **Pricing (as of 2026-11-06):** $0.20 input / $0.66 output / $0.04 cached read per 1M tokens (Tokenra); OpenCode Go $10/month with $100 usage credit (bundled); promotional Tokenra pricing $0.08/$0.26.
- **Architecture:** Proprietary stealth deployment; exact parameters not publicly disclosed.

### Raw benchmarks found

- Coding (only verified public benchmark for this exact ID): OpenCode coding benchmark snapshot (**OpenCode**, 2026-09-04, methodology v1): **23.14/40** overall coding score across four projects (Code quality 9.94/20; CSV import (PHP) 4/5; Offline sync (PHP) 3.5/5; Bank feed (Dart/Flutter) 2.7/5; Shipping quotes (Go) 3/5); average cost $0.03/prompt; average time 01:51/prompt; leaderboard rank **#15**. No verified rows for Terminal-Bench, SWE-bench, LiveCodeBench, GPQA, HLE, Artificial Analysis Intelligence Index, or BenchLM for `omen-alpha` specifically (aggregators returned no entries / 404).

### Cross-source comparison

- Official record (omenalpha.io: site, benchmarks page, "What is Omen Alpha?") vs independent reviews (Build Fast with AI coding-agent review; explainx.ai stealth-model forensics): pricing, context (~500K / 128K max out), multimodal input, zero data retention and the single coding benchmark are broadly consistent. Independent coverage did not publish a second, differently-harnessed coding score — the 23.14/40 figure comes from the OpenCode snapshot and was not replicated elsewhere.
- Conflicting results: vendor attribution. Official docs name no maker; OpenCode's data namespace points at `zhipu/omen-alpha` (→ Z.ai/GLM lineage hypothesis); independent forensics (explainx.ai, OrcaRouter) weigh a Zhipu/ZiPu-GLM theory against a Xiaomi MiMo-V3-Flash theory; community counter-claims exist. Attribution is unresolved and was not used to transfer capability scores across models.
- Context-window conflict: community-reported ~500K context vs the stealth predecessor Ox Alpha's later-publicized 1M context (GLM-5.3-Flash) — treated as distinct artifacts, not merged.

### Normalized scores (1–100)

- **Tool use: 55/100.** Only verifiable public signal is the OpenCode coding snapshot at 23.14/40 (~58%) across agentic coding projects; no independent terminal-bench/GDPval/OSWorld-style tool-use harness rows exist for this ID → mid band, capped by single-harness provenance.
- **Reasoning: 60/100.** No verified public reasoning benchmark (GPQA/HLE/LCR/CritPt/Intelligence Index) for `omen-alpha`; lineage and reasoning-tier claims remain unverified → provisional score in the mid band.
- **Context window: 85/100.** ~500K token context (third-party listings; vendor-unconfirmed) sits in the 500K–1M tier (85–94) → ~85; 128K max output noted as a caveat.
- **Multimodal: 65/100.** Text+image in, text out, reasoning + tool use reported via community/platform info; image input places it in the 60–70 multimodal band.
- **Coding: 60/100.** 23.14/40 (~58%) on the four-project coding rubric → mid-low coding band; single dated snapshot, no independent replication.
- **Overall Score: 65/100**

Mean of five quality dims (Tool 55 + Reasoning 60 + Context 85 + Multimodal 65 + Coding 60) / 5 = **65** → **Overall Score: 65/100.** Cost efficiency excluded from the mean.

- **Cost efficiency: 92/100.** $0.20/$0.66 per 1M tokens (Tokenra) / bundled $10/mo + $100 credit (OpenCode Go) — far below frontier-flagship pricing ($2–$5+/M input), in the ~$0.10–$0.20 input band → ~92.

## Signature

- Provided by: **Flint (omen-alpha)** — 2026-11-06
- Method: public web research prioritizing official model card/docs (omenalpha.io — site, benchmarks page, model-identity page, API docs) plus independent benchmarks/reviews (Build Fast with AI coding review, explainx.ai stealth-model forensics, OpenCode Data usage telemetry, AI Coding Daily coverage); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Omen Alpha — official site, pricing, access](https://omenalpha.io)
  - [Omen Alpha benchmarks — official OpenCode snapshot](https://omenalpha.io/benchmarks.html)
  - [What is Omen Alpha? — official model identity page](https://omenalpha.io/what-is-omen-alpha.html)
  - [Omen Alpha review — Build Fast with AI (speed, price, coding, verdict)](https://www.buildfastwithai.com/omen-alpha-review)
  - [Omen Alpha mystery model — explainx.ai forensics (identity theories, pricing comparison)](https://www.explainx.ai/blog/opencode-omen-alpha-mystery-model-cheap-2026)
  - [OpenCode Data — omen-alpha usage, cost & rank](https://opencode.ai/data/unknown/omen-alpha)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
