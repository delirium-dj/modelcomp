# Union Alpha — findings by GLM 5.3

- Source: undisclosed stealth vendor (`stealth/union-alpha` on OpenRouter; `opencode-go/union-alpha` on OpenCode Go)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Union Alpha (anonymous "Stealth" provider; no lab has claimed it)
- **Short description:** A stealth multimodal model for agentic coding, research, and long-context work, surfaced unannounced on routing platforms on 2026-09-16 and free during a limited preview. Vendor unidentified; treat as a black-box preview endpoint, not an auditable model family.
- **Provider / access:** OpenRouter `stealth/union-alpha` (OpenAI-compatible Chat Completions, `https://openrouter.ai/api/v1/chat/completions`); OpenCode Go `opencode-go/union-alpha` via `https://opencode.ai/zen/go/v1/messages` (Anthropic Messages API protocol); also reachable through Cloudflare AI Gateway proxying OpenRouter. OpenRouter states it is not the developer/owner and lists the upstream only as "Stealth".
- **Release / knowledge:** 2026-09-16 (appeared on OpenCode/OpenRouter); knowledge cutoff not disclosed.
- **IDs:** `stealth/union-alpha` (OpenRouter), `opencode-go/union-alpha` (OpenCode Go). No OpenCode Zen pay-as-you-go listing and no native Cloudflare `@cf` ID; Go route carries the free preview.
- **Context window:** 262,144 tokens total; max output 131,072 tokens (OpenRouter model metadata, verified 2026-09-16 snapshot by kingy.ai). No measured long-context retrieval published.
- **Modalities:** text + image in; text out; tool calls (`tools`, `tool_choice`) and structured output (`response_format`, no JSON-schema enforcement); streaming; no `reasoning_effort` control; no video/audio/PDF listed.
- **Pricing (as of 2026-09-25):** $0 input / $0 output per 1M during the limited preview on both OpenRouter and the OpenCode Go table; OpenCode Go itself is a $10/month subscription; post-preview price unpublished. Privacy: Go route — "not used for training", 0-day retention; OpenRouter route — upstream provider may retain prompts/completions (no training use); Stealth EULA prohibits sensitive data.
- **Architecture:** undisclosed — no parameter count, weights, license, tokenizer, or model card. Community theories (GLM, Kimi) unconfirmed; do not conflate with Ox Alpha (revealed as Z.ai GLM-5.3-Flash, a different documented profile).

### Raw benchmarks found

> All numbers below are third-party/community measurements of a stealth endpoint; none are vendor-published or independently reproduced under a published harness. Treat as signals, not standardized leaderboard rows.

Agent / tool use:

- Terminal-Bench v4.0 (Artificial Analysis 149-model context): **~51%** at ~$1.50/task (developer report circulated at launch; unionalpha.io chart reconstruction reads 50–60% at ~$4–5 anticipated cost/task, Pareto position between flash and Opus tiers). Note: one launch-day review attributed OpenCode's 23.14/40 stealth-model coding snapshot to Union Alpha, but that snapshot is dated 2026-09-04 — twelve days before Union Alpha existed — and belongs to the Omen Alpha stealth model; it is therefore excluded here.
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found (N/A)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- Benchable Reasoning (internal suite): **98.0%** accuracy, 90th percentile
- Benchable Hallucination / General Knowledge / Ethics: **100%** (perfect accuracy, 8/8 benchmarks completed, 100% success rate)
- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Vision-moral reasoning hands-on (MindStudio, 2026-09-17): structured numbered reasoning from visual cues, committed to a definite answer (qualitative, single run); scientific-reasoning test (titration-curve analysis) could not be completed due to preview throttling

Coding:

- Software-engineering benchmark, platform-tracked (MindStudio chart): **~73%** vs ~74% for GPT/Opus-class, at ~$0.65/task vs $6.50–$11.80 (not independently reproduced)
- Benchable Coding: **94.0%** accuracy, 83rd percentile
- Benchable Mathematics: **94.9%** accuracy, 79th percentile
- Benchable Email Classification: **99.0%** accuracy, 92nd percentile
- Benchable Instruction Following: **76.0%** accuracy, 75th percentile
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index: no verified public score found
- Hands-on Docker-stack debugging (Postgres/Flask/Redis, MindStudio): correctly diagnosed and fixed a subtle data-averaging scoring bug; noted habit of reasoning/testing in Python on a JS-heavy stack (qualitative, single run)

Long context:

- No long-context retrieval reported (no MRCR/RULER/GraphWalks data); the 262,144-token window is a capacity spec, not a measured retrieval score; community reports mention inconsistent context recall.

### Normalized scores (1–100)

> Derived per `model-comparison.md` v4 methodology. The model is a stealth preview with community-only evidence, so scores are provisional and capped by the absence of standardized harness numbers.

- **Tool use: 62/100.** Terminal-Bench v4 ~51% sits mid-band (TB 45–60% maps to 50–70); `tools`/`tool_choice` verified on the API plus one successful multi-container agentic debug; no Tau3/GDPval/Claw-Eval rows cap it.
- **Reasoning: 60/100.** Strong internal-harness results (Benchable 98.0% reasoning, perfect hallucination/ethics) and an evidence-based vision-reasoning hands-on; zero standardized scores (GPQA/HLE/Index) keep it mid-band and provisional.
- **Context window: 72/100.** 262,144 tokens = 200K–500K tier (200K baseline 70); no measured retrieval quality, and community reports of inconsistent recall temper the tier top.
- **Multimodal: 65/100.** Text+image in, text out (60–70 band); image input exercised in a real vision-reasoning test; no video/PDF/audio.
- **Coding: 72/100.** Platform-tracked SE chart ~73% near GPT/Opus-class and a successful real bug fix, corroborated by Benchable 94.0% coding; the community Terminal-Bench v4 ~51% report and the absence of SWE-bench/DeepSWE/LiveCodeBench numbers cap it well below frontier.
- **Cost efficiency: 100/100.** $0 input/output during the preview on both routes (time-limited; post-preview price unknown; Go subscription $10/month; OpenRouter route may retain prompts/completions — flagged caveat).
- **Overall Score: 66/100.** (62 + 60 + 72 + 65 + 72) / 5 = 66.2 → 66. Best-fit: a free-preview stealth agent/coder worth benchmarking now on disposable repos; not a production dependency until identity, pricing, and standardized benchmarks land.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-25
- Method: public internet research (OpenRouter/OpenCode/Cloudflare docs, community benchmark reports, independent hands-on evals); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
