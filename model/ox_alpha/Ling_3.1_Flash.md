# Ox Alpha — findings by Ling 3.1 Flash

- Source: Z.ai (`opencode/ox-alpha`; the stealth preview alias `stealth/ox-alpha` on OpenRouter, 2026-08-20 → revealed as **GLM-5.3-Flash** on 2026-08-26; also `z-ai/glm-5.3-flash` on OpenRouter, OrcaRouter, TokenRa)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ox Alpha (stealth name) — **GLM-5.3-Flash** (revealed name). Ox Alpha was the anonymous codename Z.ai tested on OpenRouter; within six days it was the platform's most-used model, and Z.ai claimed it on 2026-08-26, releasing it as GLM-5.3-Flash with open weights and a rate card. This entry and the repo's `glm-5.3-flash` folder cover the same model; capability scores are identical because the evidence is identical.
- **Short description:** Z.ai's MIT-licensed 320B-total/18B-active MoE — 1M context, 131K max output, text/image/video/PDF in, mandatory reasoning (default `max`) — with DeepSWE v1.1 63.4, Terminal-Bench 2.1 84.3, HLE 55.3% (w/tools), AutomationBench 48.8% and an AA Intelligence Index of 57 (v4.1.1; 41.8 on the current v4.3.2); free during the stealth preview and still served on free routes.
- **Provider / access:** Z.ai API (reasoning effort low/high/max, default max; thinking always enabled), OpenRouter, OrcaRouter, TokenRa, Command Code (`stealth/ox-alpha`), free browser routes; MIT open weights on Hugging Face (self-hostable). Free tier: yes (repo meta.json documents Free OpenCode Zen tier access; the no-login free preview ended at the 2026-08-26 reveal, but free routes remain).
- **Release / knowledge:** stealth preview 2026-08-20; revealed/released 2026-08-26; knowledge cutoff not captured.
- **IDs:** `opencode/ox-alpha` / `stealth/ox-alpha` / `z-ai/glm-5.3-flash`.
- **Context window:** 1,048,576 tokens in; 131,072 out.
- **Modalities:** text, image, video, PDF in; text out.
- **Pricing (as of 2026-10-02):** Z.ai list $0.15/$0.50 per 1M input/output (cache $0.03/M, ~20% of input); served as low as $0.075/$0.25 (OrcaRouter route, cache $0.0173/M — half the list rate, cause undocumented; OpenRouter promo ran to 2026-09-09); TokenRa $0.14/$0.52 (cache $0.04); sibling FlashX tier $0.37/$1.25; free OpenCode Zen tier access; AA-blended ~$0.045/task at list. OrcaRouter 7-day playground: 61.8 tok/s, p50 TTFT 7.39s, 1.47% error rate.
- **Architecture:** 320B-total/18B-active MoE (AA independently corroborates the parameter counts, 1M context and MIT licence); tool calling and structured JSON output.

### Raw benchmarks found

Vendor-reported (Z.ai, 2026-08-26; the vendor's benchmark table is entirely vendor-reported — AA does not reproduce these rows):

Agent / tool use:

- DeepSWE v1.1: **63.4** (vs GLM-5.2's 46.2); an independent developer's full 113-task run during the stealth preview scored ~63%, consistent with the vendor figure (his earlier 10-task subset scored 80% — a small-sample outlier)
- Terminal-Bench 2.1: **84.3**
- AutomationBench v1.0.6: **48.8** (vs GLM-5.2's 26.2)
- Agents' Last Exam: **26.3**
- NL2Repo: **56.3**
- Z.ai Code Bench v1.0: **29.0** at max effort vs Claude Opus 4.8's 29.5 — a near-tie on Z.ai's own harness (Claude Code 2.1.207), not an independent comparison
- The stealth-period headline "80%, ahead of every frontier model" was a 10-task DeepSWE subset run by one developer (2026-08-21), with his own variance caveat attached

Reasoning / knowledge:

- Humanity's Last Exam (w/tools): **55.3**
- AA Intelligence Index: **57** at ~$0.045/task (vendor-quoted, revision v4.1.1) — vs **41.8** on AA's own current page (Index v4.3.2, max effort); the two revisions use different eval sets (v4.3.2 adds AA-Briefcase v1.1, GDPval-AA v2.1, AutomationBench-AA, Terminal-Bench 4.0, GDP.pdf, CritPt, AA-Omniscience, AA-LCR v1.1), so neither number is "wrong" and they are not cross-comparable

Multimodal:

- MMVU: **80.5**; MVBench: **77.8**; BabyVision: **53.4**; CharXiv reasoning (w/tools): **89.4**; Chartography (w/tools): **78**

Long context:

- 1M window; no MRCR/RULER/AA-LCR figure captured (AA-LCR v1.1 is part of the v4.3.2 Index but not published separately)

No matched independent head-to-head exists: nobody has published GLM-5.3-Flash vs Opus 4.8 / GPT-6 Sol / Grok 4.7 at a stated effort on a shared harness (Z.ai's own comparison is on its own bench, at max effort, against a competitor's default).

### Normalized scores (1–100)

- **Tool use: 84/100.** DeepSWE v1.1 63.4 (vs GLM-5.2's 46.2), AutomationBench 48.8 (vs 26.2) and Terminal-Bench 2.1 84.3 lead, with NL2Repo 56.3 supporting; Agents' Last Exam 26.3% and the Z.ai Code Bench near-tie with Opus 4.8 (29.0 vs 29.5, own harness) temper the score, and no independent agentic run exists.
- **Reasoning: 86/100.** HLE 55.3% (w/tools) and the vendor-quoted AA Intelligence Index of 57 (v4.1.1) are strong; AA's own current page reports 41.8 on the harder v4.3.2 Index at max effort — the truth is somewhere between the two revisions, and no GPQA Diamond or FrontierMath figure was published.
- **Context window: 95/100.** 1,048,576-token window (131K out); no ≥98%-at-depth retrieval figure captured, so 100 is not justified.
- **Multimodal: 85/100.** Native text/image/video/PDF input with text output — the video/PDF band (75–90), pushed toward the top by CharXiv 89.4% (w/tools), MMVU 80.5% and MVBench 77.8%.
- **Coding: 78/100.** DeepSWE v1.1 63.4 (independently reproduced at ~63% on the full 113-task set) and Terminal-Bench 2.1 84.3 lead, with NL2Repo 56.3% and the Z.ai Code Bench near-tie with Opus 4.8 supporting; no LiveCodeBench/SWE-bench Verified figure was published, and the "80% ahead of every frontier model" stealth headline was a 10-task subset outlier.
- **Cost efficiency: 97/100.** Free OpenCode Zen tier access (per the repo meta.json; free routes remain, though the no-login preview ended at the reveal), plus paid routes at $0.075–0.15/$0.25–0.50 per 1M (OrcaRouter serves half the vendor list rate; cache reads ~20% of input, as low as $0.0173/M) and MIT weights to self-host — among the cheapest frontier-capable options on the market.
- **Overall Score: 86/100.** (84+86+95+85+78)/5 = 85.6 → 86 — identical to the repo's `glm-5.3-flash` entry because this is the same model under its stealth name: a MIT-licensed 320B/18B MoE with DeepSWE 63.4, TB2.1 84.3, HLE 55.3% (w/tools) and a 1M window at $0.075–0.15/$0.25–0.50 (or free on Zen routes).

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02
- Method: public internet research (Z.ai reveal and docs, OrcaRouter spec sheet, OpenRouter/TokenRa listings, oxalpha.com, community DeepSWE runs, Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Ox_Alpha.md`, using the same headings.
