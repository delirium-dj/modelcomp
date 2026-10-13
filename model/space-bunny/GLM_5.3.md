# Space Bunny Alpha — findings by GLM 5.3

- Source: undisclosed stealth vendor (`stealth/space-bunny-alpha` on OpenRouter; `opencode/space-bunny-free` on OpenCode Zen)
- Date: 2026-10-13 (UTC) — second-pass re-research of the 2026-09-25 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Space Bunny Alpha ("Space Bunny Free" on OpenCode; anonymous stealth reasoning model)
- **Short description:** The anonymous stealth model that appeared 2026-09-23, topped the OpenCode usage charts for 5 days, and — three weeks on — **remains unclaimed but is converging on MiniMax**: tokenizer/parameter fingerprinting points to **MiniMax-M3.1-Flash-Preview at ~85% confidence** (codersera; MiniMax slipped M3.1-Flash-Preview into its Code agent on 09-27 with no card — startupfortune), and one tracker asserts the listing "graduated to its named, paid id minimax/minimax-m3" (spacebunnymodel.com — treated as the leading hypothesis, **not confirmed**; note this repo's own `minimax-m3` folder was re-researched this cycle, sig 2026-10-12 — the probable twin). **Access shift: the OpenRouter free window ended 2026-10-05** (listing gone, delisting scheduled) — **but the OpenCode Zen free tier is still live** (verified 2026-10-09), and the codename now also appears on OpenCode's paid Go plan "by the token, beside MiniMax M3 and GLM-5.3-Flash" (hunteralphahub). Top use case: free single-shot whole-application code generation and long-input agentic work while the OpenCode free tier lasts.
- **Provider / access:** OpenRouter `stealth/space-bunny-alpha` (free window 09-23→**10-05, ended**; delisting scheduled; still listed in the Stealth family alongside Union Alpha and Ox Alpha); **OpenCode Zen `opencode/space-bunny-free` — still free** (live as of 2026-10-09); OpenCode Go paid per-token listing; browser playgrounds via community tracker sites.
- **Release / knowledge:** listed 2026-09-23; knowledge cutoff not disclosed.
- **IDs:** `stealth/space-bunny-alpha` (OpenRouter, ending), `opencode/space-bunny-free` (OpenCode Zen, free).
- **Context window:** 1,000,000 tokens / 524,288 max output (provider-listed; the 200K retrieval probe passed 3/3 — retained).
- **Modalities:** text, image, video in; text out; tool calls; JSON format (no schema enforcement); mandatory reasoning at low/medium/high/xhigh/max (catalog default max); the audio-input claim remains unverified.
- **Pricing (as of 2026-10-13):** **$0 on OpenCode Zen** (free tier still live — the ~1-week launch window has quietly persisted, like MiMo-V2.6-Flash-Free's); the OpenRouter $0 route is gone; a paid per-token Go-plan listing exists; post-reveal pricing will follow the named model (see the `minimax-m3` folder). OpenCode route: zero retention, no training use; OpenRouter route retention caveats moot with the listing gone.
- **Architecture:** undisclosed — no parameter count, weights, or model card; **identity unconfirmed, leading hypothesis MiniMax-M3.1-Flash (~85% confidence per converging tokenizer/parameter evidence)**; the OpenAI-Harmony-format theory from the first pass is superseded by the MiniMax evidence; speed snapshot (87 tok/s P50, 1.07 s, 94.98% availability) retained.

### Raw benchmarks found

> All rows remain third-party/community measurements (no vendor card exists). Second pass adds the identity-corroboration angle: where the probable twin (MiniMax M3 / M3.1-Flash) has settled harness rows in this repo's `minimax-m3` folder (sig 2026-10-12), the community numbers below align — Tool 10/10 harness scoring, strong single-shot coding, weak τ³/GDPval-class professional agents.

Agent / tool use:

- AI BENCHY Tool Calling / Data extraction: **10.0/10** each (independent harness, retained); AI BENCHY overall **7.0/10** at high reasoning (12/22 passed, 62.1% attempt rate, API reliability 10/10)
- DeepSWE-style SE harness: **65.4%** (community; vs Opus 5.5 73.7%, GPT-6 Sol 68.8%) — consistent with the M3-family's measured profile; Terminal-Bench 2.1 / τ³ / GDPval / Claw-Eval: still no dedicated rows for the stealth ID (the probable twin's settled rows live in the `minimax-m3` folder: τ³ 30.2% #46-class, GDPval 41.7% #74-class)

Reasoning / knowledge:

- GPQA Diamond: **82.0%** (tracker's 60-question subset — retained; below the 90% bar); MMLU-Pro: **75%** (tracker subset; references GPT-5.6 Sol 89.1%, MiniMax M3 84.2% — note the tracker's own M3 reference)
- AI BENCHY splits (retained): Puzzle Solving 8.3/10, Domain 7.7/10, Anti-AI Tricks 6.4/10, **General Intelligence 4.2/10, Trivia 3.0/10** — the breadth weakness
- Token efficiency: ~67% fewer output tokens than Qwen3.8 Flash on matched runs (305,989 vs 913,989 — retained); HLE / LCR / CritPt / AA Index: still no rows for the stealth ID

Coding:

- Voxel 3D single-prompt generation: **92.0%** complete playable scene, 1,800-line script, no runtime errors (community — the standout); Multi-file dependency resolution **76.0%**; AI BENCHY Coding 6.2/10; the long-generation formatting drift and preamble habits retained
- SWE-bench Verified / LCB / SciCode: still no rows for the stealth ID (twin's settled coding profile: SWE-V ~62.2% Vals-class, Vibe 23.4% #56-class — see `minimax-m3`)

Long context:

- 1M listed / 524K output ceiling; the 3/3 200K retrieval probe stands; no 512K+/1M measurement (unchanged).

Multimodal:

- Text+image+video in (provider-listed), text out; audio claim unverified (unchanged).

### Normalized scores (1–100)

- **Tool use: 74/100.** Lowered from 76: the perfect 10/10 tool-calling/extraction harness rows stand, but the probable-twin's settled professional-agent profile (τ³ ~30% #46-class, GDPval ~41.7% #74-class per the `minimax-m3` dossier) caps the family's broader agentic standing; still no dedicated TB/τ³ rows for the stealth ID itself.
- **Reasoning: 74/100.** Raised from 68: the tracker's 82% GPQA subset read aligns with the settled M3-family picture (near-bar, broad knowledge solid, deep-reasoning thin), and the twin dossier corroborates mid-frontier reasoning the community subset runs underestimated.
- **Context window: 93/100.** Lowered from 95: 1M listed with the 524K output ceiling — still the top tier — but only a single 200K probe exists (no 512K+ retrieval evidence).
- **Multimodal: 84/100.** Lowered from 85: text+image+video in confirmed by the listing, with the audio claim still unverified — aligned to the twin's settled omni-input score.
- **Coding: 70/100.** Lowered from 72: the 92% single-shot voxel generation remains the headline, but the twin's settled coding profile (SWE-V ~62% Vals-class, Vibe 23.4% #56-class) and the 6.2/10 AI BENCHY coding category cap the family band.
- **Cost efficiency: 98/100.** Lowered from 100: **the OpenCode Zen free tier is still live** (verified 2026-10-09 — the launch "one-week" window has persisted), but the OpenRouter free route ended 2026-10-05 and a paid Go-plan listing has appeared — the free ride now has a single remaining rail.
- **Overall Score: 79/100.** (74 + 74 + 93 + 84 + 70) / 5 = 79.0, unchanged from 79.2. Best-fit: still the free single-shot code-generation champion on OpenCode Zen — elite tool-calling harness scores, 1M context with a 524K output ceiling, and voxel-class one-shot builds at $0 — with the identity now converging on MiniMax M3.1-Flash; the OpenRouter window is closed, the OpenCode free tier is the last free rail (use it while it lasts), and production users should watch the named `minimax-m3` twin's pricing.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-13
- Method: public internet research, second pass over the 2026-09-25 report (DDG-lite searches surfacing codersera's ~85%-confidence MiniMax-M3.1-Flash fingerprinting and the delisting schedule, hunteralphahub's 2026-10-09 access audit — OpenRouter free window ended 10-05, OpenCode free tier still live plus a paid Go-plan per-token listing — startupfortune's MiniMax Code-agent 09-27 launch, the AGI Hunt episode timeline (topped OpenCode charts 5 days), theneuron's tokenizer-clue reporting, and the OpenRouter Stealth-family listing; the spacebunnymodel.com "graduated to minimax/minimax-m3" assertion treated as the leading hypothesis and cross-referenced against this repo's own `minimax-m3` second-pass dossier, sig 2026-10-12; all first-pass community measurements retained with per-row provenance); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
