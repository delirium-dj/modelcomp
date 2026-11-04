# Gemini 4 Carbon — findings by GLM 5.3 Flash

- Source: Google DeepMind / Gemini 4 Carbon (`gemini-4-carbon` — announced SKU; no public API ID yet)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Carbon
- **Short description:** Google DeepMind's "next frontier model" (announced 2026-10-28, two weeks after Gemini 4 Argon), positioned as Google's strongest model with state-of-the-art cybersecurity and long-horizon agentic capabilities. Best use: long-running security and engineering agents — but it is not publicly callable yet.
- **Provider / access:** Google DeepMind. Staged rollout only: (1) a subset of cyber defenders, (2) additional trusted partners through the Fairwind Program (launched 2025-09-02 per one source; 650+ vetted orgs — governments, healthcare, telecoms; background checks, MFA, internal-security-only terms), (3) developers/businesses/consumers "as soon as possible" — no date. Google is also in the US government's voluntary pre-release testing process. No public API endpoint, no published API model string, no model card as of 2026-11-04.
- **Release / knowledge:** Announced 2026-10-28 (first-wave access the same week); knowledge cutoff not published; no technical report, architecture details, or parameter count published.
- **IDs:** none public — no Gemini API model ID, no OpenCode Zen ID, no OpenRouter listing, therefore **no Free ID exists**. Independent evaluators (Artificial Analysis, Vals AI) run it via partner access; `gemini-4-carbon` is used here as the announced SKU name only.
- **Context window:** 1,000,000 tokens (1M) per Artificial Analysis and Vals AI spec sheets; Vals lists max output 1,048,576 (AA leaves max output unstated). Verified how: independent evaluator spec pages — Google itself has published no model card or API page, so the 1M figure is unofficial (family predecessor Argon is 1M, which supports it). Several trackers (gotry.ai, waitwhichmodel) explicitly mark context "Not stated" by Google.
- **Modalities:** text, image, speech, and video input → text output (AA spec sheet, both effort variants); reasoning yes (adaptive thinking; Google's evals use the highest thinking setting); agentic tool use yes (Antigravity CLI harness in AA's coding-agent runs); JSON mode / structured output unconfirmed (no API docs published).
- **Pricing (as of 2026-11-04):** announced Gemini API pricing — introductory **$2 / $10 per 1M in/out** (cached input 95% off ≈ $0.10/1M), moving to **$4 / $20** after the introductory period; Google gave no end date for the discount (Argon's introductory pricing ends 2026-11-30, a likely reference). Independent evaluators price their index runs at the $4/$20 list rate. Access is gated regardless of willingness to pay.
- **Architecture:** proprietary, closed weights (Vals: "Weights Private"); no parameter count, MoE details, or license published. Sits above Gemini 4 Argon in the Gemini 4 family; Google says it "builds on Argon" but names no replaced model.

### Raw benchmarks found

> Google's own eval PDF (deepmind.google methodology page, highest thinking setting) supplies the cyber/long-context rows; Artificial Analysis and Vals AI provide the independent same-harness rows. Benchgap rows marked "estimated" are model-based predictions and are NOT used as scores.

Agent / tool use:

- Terminal-Bench 4.0: **65.2%** (Artificial Analysis measured, high effort — tops AA's release table vs Claude Opus 5.5 max 59.6%; Vals AI independent run: 63.13%, #4 of 57 — harness variance)
- Terminal-Bench-Science 0.1: **64.8%** (AA measured, high — #1 lead per AA article)
- AutomationBench-AA: **77.8%** (AA measured, high — #1 lead; distinct from Google's internal "AutomationBench (Zapier)" 53.9%, a different harness — do not mix)
- OSWorld 2.1 offline subset: **81.5%** (Google-run; #2 — Claude Opus 5.5 leads at 87.2%, GPT-6 Astra 80.9%, Argon 74.7%)
- Vals Index v2.2: **70.45%**, #2 of 29/32 (behind Claude Sonnet 5.5 70.85%, ahead of Claude Opus 5.5 70.18%); component leads: #1 of 87 Legal Research Bench (55.77%), #2 of 35 EMB v1.1 (76.47%), #3 of 78 Tax Agent Bench (48.86%), #5 of 33 Finance Agent v2.1 (67.16%); weakest: HLAB-Vals-1.1 17.50%; cost/test $10.51, latency 47 min 45 s at reasoning effort "high"
- AA-Briefcase v1.1: **1610 Elo** (high; +126 vs Argon 1483; still behind Kimi K3.1 Pro 1678, Muse Wonder max 1659, Grok 4.7 xhigh 1638, Claude Opus 5.5 max 1800)
- AA Coding Agent Index: **59** via Antigravity CLI — #2, behind Claude Code with Claude Opus 5.5 max (62)
- Vending-Bench 2: **$16,484** final balance (Google-run; ahead of GPT-6 Astra and Argon)
- Gray Swan indirect prompt-injection: **0.0% attack success** (Google-run; Argon 0.7%)
- SEC-bench Pro (vulnerability finding): **88.2%** (Google-run, 183-task May-2026 JavaScript-engine split, pass@1 over 3 attempts, mitigations off; no same-harness competitor number published)
- ExploitGym (exploitation): **54.8%** (Google-run, 10-hour cap, mitigations off; at the standard 6-hour cap **53.5%** vs Argon 39.5%, Opus 5.5 34.5%, GPT-6 Astra 42.4% uncapped — per CTOL's harness comparison)
- CWE-bench (patching): **71.0%** (Collinear public leaderboard — the one independent security row; vs Argon 68.0%, GPT-6 Astra 68.0%, Opus 5.5 67.0%)
- GDPval-AA: no verified public score found (benchgap's "63.3%" is an estimate)
- Tau3-Banking: no verified public score found (benchgap's "50.2%" is an estimate)
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v5.0: **59** (high) — #1 of 34 (Google's table and AA's article agree; AA's release-comparison tool shows 60 for the same config — minor refresh variance; vs Opus 5.5 max 58, GPT-6 Astra max 57, GPT-6.1 Sol max 55, Argon 50)
- HLE-Diamond: **69.1%** (AA measured, high — #1 lead; AA's tool shows 67.4% medium / 61.9% low; benchgap separately lists "AA-HLE 60.4% measured" — conflicting lower reading, likely a different variant/snapshot; 69.1% from AA's own release table preferred)
- CritPt v2 (Hard Subset): **69.0%** (AA measured, high; Opus 5.5 max 68.0%)
- AA-Omniscience v1.1: **54** — #1 lead (accuracy 58.3%; hallucination rate 11%, up from Argon's 4% but still second-lowest AA lists)
- AA-LCR: **79.3%** (benchgap, measured)
- RiemannBench: **80.0%** (Google-run; vs Argon 76.0%, GPT-6 Astra 72.0%, Opus 5.5 69.6%)
- GPQA Diamond: no verified public score found (benchgap's ~94% rows are estimates)
- LMArena Text: **1528 Elo** (±9, preliminary, 4,403 votes, "Gemini 4 Carbon (High)") — rank 1 at measurement time (Argon 1520)

Coding:

- FrontierSWE 2: **61.2%** (Google-run; #3 — GPT-6 Astra 65.5%, Opus 5.5 62.3%, Argon 55.0%)
- FrontierCode v1.1: **51%** (AA, high — #2 behind Opus 5.5 max 56%); FrontierCode 2.0: **40.6%** (AA high; Opus 5.5 46.4%)
- Vibe Code Bench: **89.06%** (Vals, #8 of 121)
- SWE-sweep: **9.6%** (Google-run, low)
- WebDev Arena: **#4, 1768 Elo** (+89 vs Argon)
- SWE-bench Verified: no verified public score found
- LiveCodeBench: no verified public score found; SciCode: no verified public score found
- DeepSWE: no verified public score found (benchgap's 73.3% is an estimate)
- AA Coding Index: no verified public score found (benchgap's 78.0% is an estimate)

Long context:

- GraphWalks (BFS, 256K–1M): **96.2%** (Google-run; the widest lead in Google's table — Argon 84.2%, GPT-6 Astra 71.8%, Opus 5.5 66.8%)
- MRCR: no verified public score found (benchgap MRCRv2 85.7% is an estimate)

### Normalized scores (1–100)

- **Tool use: 90/100.** Tops AA's same-harness agentic rows (Terminal-Bench 4.0 65.2%, Terminal-Bench-Science 64.8%, AutomationBench-AA 77.8% — all #1 leads) and is #2 on the AA Coding Agent Index; OSWorld 2.1 81.5% is #2 behind Opus 5.5, and Vals' independent TB4.0 run ranks it #4 — frontier class, capped just below the 90s ceiling by those non-sweeps and by zero independent verification of the Google-run cyber rows.
- **Reasoning: 93/100.** #1 on AA Intelligence Index v5.0 (59–60, at the 60 frontier threshold), #1 HLE-Diamond 69.1% (far past the 40% frontier reference), CritPt v2 hard 69.0%, AA-Omniscience 54 with top accuracy — capped by the unpublished GPQA figure, the hallucination-rate rise to 11%, and Google-run-only status for RiemannBench/GraphWalks.
- **Context window: 97/100.** 1M-token window (AA + Vals spec sheets; unofficial — Google never published a model card) with GraphWalks 96.2% across 256K–1M, just under the ≥98%@512K+ bar for a 100; 1M tier entry is 95–100.
- **Multimodal: 92/100.** Text + image + speech + video input, text output (AA spec) — audio input puts it in the 90–100 band; best-in-table Blueprint-Bench 2 (58.6% vs Astra 49.7%, Opus 5.5 51.2%) supports the top of the band; capped for text-only output and unconfirmed PDF/structured-input support.
- **Coding: 90/100.** Terminal-Bench 4.0 lead (65.2% AA), Vibe Code Bench 89.06% (Vals), #2 AA Coding Agent Index (59) and #2 FrontierCode (51%/40.6%) behind Opus 5.5 — but #3 on FrontierSWE 2 (61.2% vs Astra 65.5%) and no SWE-bench Verified/LiveCodeBench/SciCode numbers at all, which caps it below the 95+ coding tier.
- **Cost efficiency: 56/100.** Independent evaluators price it at the $4/$20 list rate (intro $2/$10 has no end date and no public access to use it) — between the methodology's $3/$15 ≈ 60 and $10/$50 ≈ 30 reference points; AA cost per Index task $7.76 (mid-pack vs Astra $6.25, Opus 5.5 $10.04); cached input $0.20/1M is a genuine discount. At the introductory rate this would be ~75, but that rate is currently unusable.
- **Overall Score: 92/100.** (90 + 93 + 97 + 92 + 90) / 5 = 92.4 → 92. Best-fit recommendation: the frontier leader for long-horizon security and large-codebase agent work — for the vetted few who can access it; everyone else should benchmark against Gemini 4 Argon (same family/price, GA now) or Claude Opus 5.5.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-04
- Method: public internet research (official Google announcement + independent evaluations from Artificial Analysis, Vals AI, benchgap, DataCamp, waitwhichmodel, explainx, Eden AI, CTOL, Dataconomy, gotry, alekseialeinikov, scaler; conflicting figures compared and the same-harness source preferred in every conflict); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing Gemini 4 Carbon — Google blog (official announcement)](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/)
  - [Gemini 4 Carbon is the new #1 on the Artificial Analysis Intelligence Index v5](https://artificialanalysis.ai/articles/gemini-4-carbon-new-number-1)
  - [Artificial Analysis release comparison — Gemini 4 Carbon (high) vs Claude Opus 5.5 (max)](https://artificialanalysis.ai/models/releases/comparisons)
  - [Artificial Analysis — Gemini 4 Carbon (Low) vs (Medium) spec/benchmark comparison](https://artificialanalysis.ai/models/comparisons/gemini-4-carbon-low-vs-gemini-4-carbon-medium)
  - [Vals AI — Gemini 4 Carbon model page (Vals Index v2.2)](https://www.vals.ai/models/google_gemini-4-carbon)
  - [DataCamp — Gemini 4 Carbon: Google's Newest World Model](https://www.datacamp.com/blog/gemini-4-carbon)
  - [Wait Which Model — Gemini 4 Carbon (eval-PDF audit, LMArena Elo, spec gaps)](https://www.waitwhichmodel.fyi/models/gemini-4-carbon)
  - [benchgap — Gemini 4 Carbon benchmark scores (measured vs estimated)](https://benchgap.net/model/gemini-4-carbon)
  - [Eden AI — Gemini 4 Carbon release, benchmarks, pricing, availability](https://www.edenai.co/post/gemini-4-carbon-release-benchmarks-pricing-availability)
  - [explainx — Carbon vs Opus 5.5 vs Astra vs Grok 4.7 (vendor-claim audit)](https://explainx.ai/blog/gemini-4-carbon-vs-claude-opus-5-5-vs-gpt-6-astra-vs-grok-4-7-comparison-2026)
  - [CTOL Digital — ExploitGym time-cap analysis and Fairwind access steps](https://www.ctol.digital/news/gemini-4-carbon-fairwind-access-price-step/)
  - [Aleksei Aleinikov — Gemini 4 Carbon review: benchmarks, price, access, Fairwind](https://www.alekseialeinikov.com/en/blog/topics/ai/gemini-4-carbon-review-benchmarks-price-access)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
