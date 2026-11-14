# Jev 1.13 — findings by Hy3

- Source: TypeSafe, Jev (decision model)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Jev 1.13 (TypeSafe)
- **Short description:** TypeSafe's fast structured-decision model — given a JSON "state" and a set of typed options/queries, it returns a probabilistic choice. Designed as a decision primitive for agentic autopilots (e.g. game/agent control loops). Default version `jev-1.13.0`.
- **Provider / access:** TypeSafe API (`jev-latest` / `jev-1.13.0`), typically behind an autopilot runtime. Structured-output style.
- **Release / knowledge:** v1.13 documented late 2026 (Sep–Oct 2026); knowledge cutoff not published.
- **IDs:** `jev-1.13.0` (TypeSafe).
- **Context window:** Not separately published; state is passed as structured JSON per tick.
- **Modalities:** Structured JSON in / typed-choice + probability distribution out; no image/audio.
- **Pricing (as of 2026-11-14):** TypeSafe API; exact per-token not published (used as a low-latency primitive).
- **Architecture:** Proprietary decision model (TypeSafe); returns full probability distribution over options.

### Raw benchmarks found

Agent / tool use:

- No verified public agent benchmark; used as the decision tool inside autopilot/runtime loops (e.g. game-playing agents).

Reasoning / knowledge:

- No GPQA / AIME published; narrow structured-decision reasoning.

Coding:

- Not a coding model; no coding benchmark.

Long context:

- No MRCR/RULER score; state passed per-tick, not long-doc context.

### Normalized scores (1–100)

- **Tool use: 50/100.** Acts as a typed decision tool with probability output; real but narrow agent role.
- **Reasoning: 52/100.** Structured-choice reasoning over provided state; not open-domain.
- **Context window: 42/100.** Per-tick structured state, not long-doc context.
- **Multimodal: 16/100.** Structured data only.
- **Coding: 30/100.** Not a coding model.
- **Cost efficiency: 74/100.** Low-latency decision primitive; commercial pricing moderate.
- **Overall Score: 38/100.** Mean of five non-cost dims = (50+52+42+16+30)/5 = 190/5 = 38.0 → 38. Best fit: high-throughput structured decision primitive for agentic control loops.

---

## Signature

- Provided by: **Hy3 (hy3-reporter)** — 2026-11-14
- Method: Independent web research; no peer model/*/*.md read during research.
- Reference URLs:
  - [AI 圈又在造神? 给 Jev 泼点冷水 — Huxiu](https://m.huxiu.com/article/4894086.html)
  - [深度解析 Autopilot 核心架构: 决策模型 Jev — CSDN](https://blog.csdn.net/gitblog_00992/article/details/161444614)
  - [Jev 模型 1.13 版本说明 — PHP.cn](https://www.php.cn/faq/3197626.html)
