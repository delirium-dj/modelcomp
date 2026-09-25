# Omen Alpha — findings by GLM 5.3

- Source: undisclosed stealth vendor (`omen-alpha` on OpenCode Go; community evidence points to a Zhipu/GLM-family backend — unconfirmed)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Omen Alpha (OpenCode Go stealth coding model)
- **Short description:** A stealth coding model added to OpenCode Go on 2026-09-04 with no vendor, model card, or parameter disclosure, marketed as "$100 worth of usage for $10" inside the Go subscription. Top use case: high-throughput, low-cost coding-agent loops where speed and session economics matter more than model identity.
- **Provider / access:** OpenCode Go (`opencode-go`, $10/month); model ID `omen-alpha` served through a standard OpenAI-compatible chat-completions endpoint; exclusively available to Go subscribers.
- **Release / knowledge:** 2026-09-04; knowledge cutoff not disclosed.
- **IDs:** `omen-alpha` (OpenCode Go). Not on OpenRouter or OpenCode Zen pay-as-you-go lists.
- **Context window:** 500,000 tokens; 128,000 maximum output (Pi model registry metadata).
- **Modalities:** text and image input; text output; reasoning model with low and high thinking levels.
- **Pricing (as of 2026-09-25):** included in OpenCode Go ($10/month, ~$100 usage quota; OpenCode estimates ~11,600 requests per 5 hours, 29,000/week, 57,900/month); equivalent listed token pricing $0.20 in / $0.66 out / $0.04 cached read per 1M. OpenCode Go privacy table: not used for training, 0-day retention.
- **Architecture:** undisclosed; no parameter count, weights, or model card. A briefly exposed `zhipu/omen-alpha` OpenCode data path drove GLM-family speculation (echoing Ox Alpha's unmasking as GLM-5.3-Flash) — a clue, not an attribution. Community-reported throughput ~180–190 tokens/s (one measured 189 tok/s). Usage snapshot: ~39B recent tokens, ~2,900 unique users, 7,518 sessions, avg session cost ~$0.27; #7 by call volume five days post-launch.

### Raw benchmarks found

> One dated OpenCode leaderboard snapshot (2026-09-04, High configuration) plus a hands-on third-party test (Zhidx/36kr, 2026-09-09). No standardized harness (SWE-bench, GPQA, Terminal-Bench) rows exist for this ID.

Agent / tool use:

- OpenCode coding leaderboard (four real implementation projects, 5-point rubric): **23.14/40** overall, rank #15 — CSV import (PHP) **4/5**, Offline sync (PHP) **3.5/5**, Bank feed (Dart/Flutter) **2.7/5**, Shipping quotes (Go) **3/5**; expanded code-quality component **9.94/20**; avg cost **$0.03**/prompt, avg time **01:51**/prompt
- Terminal-Bench 2.1 / 4.0: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- Zhidx hands-on verdict: strong on visual recognition and front-end speed, but "some problems in logical reasoning" and a pattern of "prioritizing speed over intellectual performance" (qualitative)
- Pre-thinking behavior: very long planning phases (8 minutes before a 25-minute build; 20+ minutes of the 44-minute Tank Battle task)
- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index: no verified public score found
- Cross-turn recall: one Reddit report of the model struggling to recall earlier turns and repeatedly asking for clarification (anecdotal)

Coding:

- OpenCode coding leaderboard: **23.14/40** (#15) — see agent rows for component breakdown
- Hands-on (Zhidx, 2026-09-09): "Niu Lai" YouTube clone — full interactive front end in **25 minutes** (plus 8 min planning), with working search, sidebar switching, detail/channel pages, and responsive adaptation
- Hands-on games: dodge-ball mini-game in **<3.5 min** (playable); FC Tank Battle in **44 min** (works but basic logic flaws: enemy tanks clustered left, cramped counterattack space); 2D dungeon roguelike in **~2 hours** (functional logic, weak hit effects, average playability)
- Hands-on 3D world modeling: same-prompt build in **~1.5 hours** vs ~3 hours each for GLM-5.3-Flash and GPT-5.6-Luna (different styles, per tester)
- SWE-bench Verified / DeepSWE / LiveCodeBench / SciCode: no verified public score found

Long context:

- No long-context retrieval reported (no MRCR/RULER rows); 500K is a capacity spec; community recall complaints temper it

### Normalized scores (1–100)

> Stealth subscription model; evidence is one dated platform leaderboard plus hands-on tests. Scores are provisional.

- **Tool use: 62/100.** Four real multi-step implementation projects at 23.14/40 (~58%) on the OpenCode leaderboard and self-testing agentic behavior in hands-on builds; no Terminal-Bench/Tau3/GDPval rows cap it mid-band.
- **Reasoning: 55/100.** Reasoning tiers exist (low/high) with very long planning phases, but the one in-depth hands-on review flags logical-reasoning weaknesses and speed-over-depth behavior, and no standardized reasoning rows exist.
- **Context window: 86/100.** 500,000 tokens = 500K–1M tier (85–94); no measured retrieval quality and anecdotal cross-turn recall complaints keep it at the tier floor.
- **Multimodal: 65/100.** Text+image in, text out (60–70 band); image understanding verified hands-on (periodical-page recognition, screenshot-driven development).
- **Coding: 66/100.** Fast, genuinely usable builds (25-minute YouTube clone; 3D modeling ~2× faster than GLM-5.3-Flash/GPT-5.6-Luna on the same prompts) but 23.14/40 on the platform leaderboard, game-logic flaws, and zero standardized coding rows place it mid-band, below the named flash-tier models it is priced against.
- **Cost efficiency: 95/100.** $0.20/$0.66 per 1M equivalent with $0.04 cached reads inside a $10/month plan carrying ~$100 of usage (~$0.03/prompt, $0.27/session observed) — near-free economics for subscribers; identity opacity and Go-lock-in are the caveats.
- **Overall Score: 67/100.** (62 + 55 + 86 + 65 + 66) / 5 = 66.8 → 67. Best-fit: the high-throughput coding worker for OpenCode Go subscribers — exceptional speed and session economics for routine implementation and front-end work; route deep reasoning and high-risk changes to a documented frontier model.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-25
- Method: public internet research (OpenCode Go docs and leaderboard snapshot, Pi registry, Zhidx/36kr hands-on test, community reports); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
