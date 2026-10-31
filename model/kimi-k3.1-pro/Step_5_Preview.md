# Kimi K3.1 Pro — findings by Step 5 Preview

- Source: Moonshot AI/Kimi K3.1 Pro
- Date: 2026-10-31 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3.1 Pro (sibling variant: Kimi K3.1 Pro Highspeed — 2–3x faster, same weights/quality tier)
- **Short description:** Moonshot AI's flagship open-weight 3T-class reasoning model (post-trained Kimi K3 with far larger RL compute), released 2026-10-23; aimed at coding, agentic SaaS/finance work, and 3D creation. Weights were pending at launch with a promised full release by 2026-11-04, after which it becomes the highest-scoring open-weights model.
- **Provider / access:** Moonshot API `https://api.moonshot.ai/v1` (Chat Completions, OpenAI SDK compatible); also on Kimi.ai, Kimi mobile apps, Kimi Work, Kimi Code. Not listed on OpenCode Zen as of 2026-10-31 (Zen carries only Kimi K3 and K2.x), so no `opencode/` ID exists yet. Flagship access requires a minimum $1 top-up.
- **Release / knowledge:** 2026-10-23; knowledge cutoff not published.
- **IDs:** `kimi-k3.1-pro` (Moonshot API); `kimi-k3.1-pro-highspeed` (speed variant)
- **Context window:** 1,048,576 tokens (1M) total; `max_completion_tokens` defaults to 131,072 and can be raised to 1,048,576 (official docs); flat pricing, no context-length tiering.
- **Modalities:** in — text, image, video (docs show image_url and video file inputs); out — text. Always-on thinking mode with `reasoning_effort` low/high/max (default max); tool calls, `tool_choice`, dynamic tool loading, strict JSON-schema structured output, partial mode; automatic context caching with 5m/1h TTL.
- **Pricing (as of 2026-10-31):** $2.00 per 1M input / $0.20 per 1M cache-hit / $10.00 per 1M output (Moonshot API, flat across the 1M window; 33% below Kimi K3 on all three rates). Artificial Analysis measures $1.98 per Intelligence Index task; Vals AI $6.44 per Vals Index test.
- **Architecture:** MoE, 2.8T total / ~104B active parameters (Artificial Analysis); open weights planned (license terms at release not yet published).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **67%** (Artificial Analysis, max effort — highest of any model tested; Kimi K3 was 13%, Claude Sonnet 5.5 64%) — **conflicting figure:** Vals AI measured **63.64%** (#3 of 55, behind Claude Opus 5.5 at 65.15%); a third-party launch summary cited 65.7%
- AutomationBench-AA: **73%** (Artificial Analysis; up from 58% for Kimi K3)
- GDPval-AA v2.1: **1,846 Elo** (3rd, behind Claude Opus 5.5 1,866 and Muse Wonder Full 1,857; +312 Elo over Kimi K3) (Artificial Analysis)
- Vibe Code Bench v1.1: **84.89%** (#18/123) (Vals AI)
- Terminal-Bench-Science 0.1: **31.43%** (#8/43) (Vals AI); Moonshot claims a higher (image-only) figure
- Finance Agent v2.1: **61.49%** (#17/35); OfficeQA Pro v2 / SpreadsheetBench v2 claimed SOTA by Moonshot but values published only in images — no verified text numbers
- Tau3-Banking / Tau2-Bench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **55** — 4th overall at launch, behind only Claude Opus 5.5 (58), Claude Sonnet 5.5 (56) and Muse Wonder Full (56); +11 over Kimi K3 (44)
- HLE (Humanity's Last Exam): **52%** (up from 47% for K3) (Artificial Analysis)
- CritPt v2: **25%** (up from 23%) (Artificial Analysis)
- SciCode: **61%** (up from 59%) (Artificial Analysis)
- AA-Omniscience v1.1: Index **30**, accuracy 51%, hallucination rate **44%** (down from 53% for K3) (Artificial Analysis); Moonshot separately reports a claim-level hallucination rate of 6.85% vs K3's 23.35% on its own error-probing stress set (vendor-run, not comparable)
- Vals Index v2.2: **62.52%** (#8 of 27 on the update page / #9 of 32 on the model header — top open-weights entry) (Vals AI)
- GPQA Diamond: no verified public score found
- IOI: **81.89%** (#11/46) (Vals AI) — competitive-programming reasoning
- ProofBench v1.1: **91.00%** (#10/52) (Vals AI)

Coding:

- Terminal-Bench 4.0: 67% / 63.64% (see conflicting figures above)
- SciCode: **61%** (Artificial Analysis)
- Vibe Code Bench: **84.89%** (Vals AI)
- SWE-bench Verified: no verified public score found
- LiveCodeBench: no verified public score found
- Moonshot's demos (Unreal/Godot/Blazor long-horizon builds, 3D CAD) are qualitative — no harness numbers

Long context:

- 1M-token window (official docs); no MRCR/RULER/GraphWalks retrieval curve published — long-context retrieval quality unverified

### Normalized scores (1–100)

- **Tool use: 90/100.** GDPval-AA 1,846 Elo (frontier band ≥1750), AutomationBench-AA 73%, and the top Terminal-Bench 4.0 result in the field (67% per AA; Vals' 63.64% still #3) put it firmly in the frontier band; capped at 90 because GDPval trails Opus 5.5/Wonder Full and Tau3/Claw-Eval numbers are unpublished.
- **Reasoning: 88/100.** Intelligence Index 55 (4th overall) with HLE 52% clears the frontier reference band (Index 60+/HLE 40%+ is aspirational — 55/52 is just under); capped by mediocre CritPt (25%) and a high AA-Omniscience hallucination rate (44%).
- **Context window: 95/100.** 1M tokens with max output up to 1M — top tier (≥1M = 95–100); no published long-context retrieval curve to justify 100.
- **Multimodal: 85/100.** Text + image + video input, text-only output — image+video coverage sits in the 75–90 band; no audio input or non-text output.
- **Coding: 90/100.** Terminal-Bench 4.0 top-of-field (67%/63.64% across two harnesses), SciCode 61% (>55% frontier ref), Vibe Code 84.89%, IOI 81.89%; capped at 90 because SWE-bench Verified and LiveCodeBench have no verified public numbers.
- **Cost efficiency: 84/100.** $2/$10 flat with $1.98 per AA Index task — cheaper than Muse Wonder ($4.52) and mid-way between the ~$0.60/$2.20 (92) and ~$3/$15 (60) reference points.
- **Overall Score: 90/100.** Mean of (90 + 88 + 95 + 85 + 90)/5 = 89.6 → 90. Best fit: the strongest open-weights route for agentic coding and knowledge work once weights drop (promised by 2026-11-04); via API it is frontier-class at roughly half Muse Wonder's cost per task.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-10-31
- Method: public internet research across five independent sources (Moonshot official quickstart docs, Artificial Analysis launch article, Vals AI model page, plus benchmarklist/aireleasetracker/secondary launch coverage); conflicting Terminal-Bench 4.0 figures (AA 67% vs Vals 63.64%) reported side by side rather than averaged; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Moonshot AI — Kimi K3.1 Pro official quickstart docs](https://platform.kimi.ai/docs/guide/kimi-k3-1-pro-quickstart)
  - [Artificial Analysis — Kimi K3.1 Pro launch benchmarks article](https://artificialanalysis.ai/articles/kimi-k3-1-pro-launch-benchmarks)
  - [Vals AI — Kimi K3.1 Pro model page (Vals Index, Terminal-Bench 4.0, component scores)](https://www.vals.ai/models/kimi_kimi-k3.1-pro)
  - [BenchmarkList — Moonshot AI Kimi K3.1 Pro specs](https://benchmarklist.com/models/moonshotai-kimi-k3.1-pro/)
  - [AI Release Tracker — Kimi K3.1 Pro specs and release details](https://aireleasetracker.com/model/moonshot/kimi-k3.1-pro)
  - [MindStudio — Kimi K3.1 Pro benchmarks review](https://www.mindstudio.ai/blog/kimi-k3-1-pro-benchmarks-review)
