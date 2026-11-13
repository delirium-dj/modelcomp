# Omen Alpha — findings by Ernie 5.5 Flash

- Source: OpenCode (stealth coding model, `omen-alpha`), served via OpenCode Go / Tokenra
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Omen Alpha (Omen Alpha (High) configuration)
- **Short description:** Unannounced stealth coding/agentic model launched inside OpenCode Go on 2026-09-04 for $10/month Go subscribers; vendor never confirmed, community evidence (backend namespace tagging, behaviour, pricing shape) points at a Zhipu AI / GLM lineage. Do not confuse with the parked misspelling `omin-alpha`.
- **Provider / access:** OpenCode Go (`omen-alpha` / `omen-alpha-free` style routes), OpenAI-compatible endpoint; also listed by Tokenra (`omen-alpha`) with its own token pricing. Responses API surface on OpenCode Go.
- **Release / knowledge:** 2026-09-04 (OpenCode launch); knowledge cutoff not published.
- **IDs:** `omen-alpha` (OpenCode Go), `omen-alpha` (Tokenra). No public vendor ID — vendor unconfirmed.
- **Context window:** 500,000 tokens (OpenCode docs / Pi listing), 128,000 max output.
- **Modalities:** text + image input; text output; reasoning supported (`(High)` effort configuration used in the published evaluation).
- **Pricing (as of 2026-11-12):** $0.20 / 1M input, $0.66 / 1M output, $0.04 / 1M cached read (Tokenra listing); included in the $10/month OpenCode Go subscription.
- **Architecture:** undisclosed stealth weights; community speculation of GLM lineage only — not verified.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- OpenCode internal leaderboard (2026-09-04 snapshot, methodology v1): **23.14 / 40 overall coding score, leaderboard rank #15**, average $0.03 per prompt, average 1:51 per prompt.

Coding:

- OpenCode project rubric (five-point per project, 2026-09-04, Omen Alpha (High)): CSV import (PHP) **4/5**, Offline sync (PHP) **3.5/5**, Bank feed (Dart/Flutter) **2.75/5**, Shipping quotes (Go) **3/5**
- OpenCode expanded code-quality component: **9.94 / 20**
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **not indexed** (stealth model, no public profile)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Long context:

- No MRCR / RULER / GraphWalks figures published; the 500K window is from the OpenCode/Pi listing only, with no retrieval measurement.

### Normalized scores (1–100)

- **Tool use: 45/100.** No public agentic benchmark (Terminal-Bench, Tau3, GDPval, MCP) exists for this stealth route; the OpenCode coding-leaderboard rank (#15) is a harness result inside one product, so tool use stays unproven.
- **Reasoning: 55/100.** Reasoning is supported and the `(High)` effort configuration was used for the published run, but with zero GPQA/HLE/Index numbers the score is a placeholder mid-band read.
- **Context window: 85/100.** 500,000 tokens input / 128,000 output puts it at the bottom of the 500K–1M band; no long-context retrieval evidence exists to justify more.
- **Multimodal: 65/100.** Text + image input, text output only — the "image in" band.
- **Coding: 55/100.** The only measured evidence is the OpenCode snapshot: 23.14/40 overall (≈58% of max) with project scores 4.0, 3.5, 2.75 and 3.0 out of 5 and code quality 9.94/20 (≈50%) — competent, mid-pack, well short of frontier agents.
- **Cost efficiency: 95/100.** $0.20 in / $0.66 out per 1M (and effectively bundled into a $10/month subscription) is bottom-tier pricing; not counted toward Overall.
- **Overall Score: 61/100.** Mean of tool use 45, reasoning 55, context 85, multimodal 65, coding 55. Best fit: cheap high-volume coding/agent work inside OpenCode Go; the vendor's identity and independent benchmarks are unconfirmed, so treat the profile as provisional.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-12 UTC
- Method: public internet research (OpenCode launch coverage, Tokenra listing, omenalpha.io benchmark snapshot of the 2026-09-04 OpenCode leaderboard); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Omen Alpha — benchmarks snapshot (OpenCode leaderboard 2026-09-04)](https://omenalpha.io/benchmarks.html)
  - [ExplainX — Omen Alpha: OpenCode stealth model at $0.20/M](https://www.explainx.ai/blog/opencode-omen-alpha-mystery-model-cheap-2026)
  - [Startup Fortune — OpenCode's mystery Omen Alpha model](https://startupfortune.com/opencodes-mystery-omen-alpha-model-has-developers-guessing-who-built-it/)
  - [Magica — OpenCode Omen Alpha pricing and its missing developer](https://magica.com/news/opencode-omen-alpha-anonymous-model-pricing)
  - [TokenDyno — Omen Alpha speed/latency tracking](https://tokendyno.com/models/opencode-go-responses/omen-alpha/)