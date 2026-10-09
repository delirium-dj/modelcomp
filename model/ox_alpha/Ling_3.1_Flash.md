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

- **Tool use: 82/100.** GDPval-AA v2 1773 Elo (launch table; AA's current v2.1 read: 1647) and Toolathlon Verified 78.4% lead, with AutomationBench 48.8% vendor / 60% (AA's own run) and OSWorld 2.0 59.1% supporting; Terminal-Bench 2.1 at 84.3% sits 0.7 points under the 85% bar, but Terminal-Bench 4.0 at 33% (AA's independent run) is far under the 55–66% frontier, Agents' Last Exam 26.3% is mid, and all headline figures are Z.ai-run launch evals awaiting independent reproduction.
- **Reasoning: 84/100.** GPQA Diamond 91.2% (AA) / 90.2% (Epoch AI, independent) clears the 90%+ frontier band and HLE 55.3% with tools clears the 40%+ bar; the cap comes from AA's current reads — Intelligence Index 42 (v4.3.2-era vs the vendor-cited 57 on v4.1.1 at max — level with GPT-5.6 Terra, 3 behind GLM-5.3), HLE 40% (no tools), FrontierMath Tier 4 17.1%, CritPt 15.4%, AA-Omniscience accuracy 7 and ARC-AGI-2 65.8% (semi-private, mid-tier).
- **Context window: 95/100.** 1,048,576-token window (131K out); no ≥98%-at-depth retrieval figure captured, so 100 is not justified.
- **Multimodal: 85/100.** Native text/image/video/PDF input with text output — the video/PDF band (75–90), pushed toward the top by CharXiv 89.4% (w/tools), MMVU 80.5% and MVBench 77.8%.
- **Coding: 76/100.** Terminal-Bench 2.1 84.3% sits just under the 85% bar and the AA Coding Index of 71.5 clears the 70% reference, with DeepSWE 63.4% (best-in-table ahead of Opus 4.8's 58.0%) and NL2Repo 56.3% supporting; FrontierCode 1.1 Main 31.8% (Cognition, chisel harness) and the independent LiveCodeBench v6 read of 28.0% are well under the frontier, and SciCode 51.6–52% and DeepSWE 63.4% sit under their 55%/74% references.
- **Cost efficiency: 95/100.** Z.ai list $0.15/$0.50 per 1M, limited-time promo $0.075/$0.25, blended ~$0.10/M and third-party hosts from $0.026/$0.93 — at or beyond the ~97–99 ($0.10/$0.20) anchor; the ~306 GiB FP8 self-hosting footprint and ~49 tok/s throughput are the practical offsets. (The repo meta.json's "Free OpenCode Zen tier" claim is not confirmed by the sibling entry's pricing research — paid routes only — so Cost matches the sibling's 95 rather than the 97 this file previously carried.)
- **Overall Score: 84.4/100.** (84+86+95+85+78)/5 = 85.6 → 86 — identical to the repo's `glm-5.3-flash` entry because this is the same model under its stealth name: a MIT-licensed 320B/18B MoE with DeepSWE 63.4, TB2.1 84.3, HLE 55.3% (w/tools) and a 1M window at $0.075–0.15/$0.25–0.50 (or free on Zen routes).

---

## Update 2026-10-08 (6-day re-research)

**Score revisions: Tool 84→82, Reasoning 86→84, Coding 78→76, Cost 97→95, Overall 86→84** — harmonized with the sibling `glm-5.3-flash` entry (the same model under its revealed name), whose 2026-10-08 revision incorporated AA's current-page reads and new independent rows. Context 95 / Multimodal 85 unchanged:

- Harmonization: this file previously carried the pre-revision scores (84/86/95/85/78/97/86) while the sibling carried the revised ones (82/84/95/85/76/95/84) — despite this file's own claim that "capability scores are identical because the evidence is identical." The sibling's revision is the shared evidence base both entries now use: AA's current-page reads (Intelligence Index **42** on v4.3.2 vs the vendor-cited 57 on v4.1.1 at max, GDPval-AA v2.1 1647, AutomationBench-AA 60%, Terminal-Bench 4.0 33%, SciCode 52%, HLE 40% no-tools, AA-Omniscience 7, AA-LCR 80%) plus new independent rows (ARC-AGI-2 65.8%, FrontierCode 1.1 Main 31.8%, FrontierMath T4 17.1%, GPQA 90.2% via Epoch).
- New independent coding reads: **LiveCodeBench v6 28.0% pass@1** (greedy, temperature 0, single attempt, zero generation failures; Easy 51.2% / Medium 30.8% / Hard 13.8%) — corroborates the sibling's weak LiveCodeBench-Base 37.6% and caps Coding; the OpenCode coding leaderboard places it **#26** (8.9/20 points, between Gemini 3.1 Pro and DeepSeek V4 Flash, ~12:36 per prompt).
- DeepSWE forensics (MeshCode, 2026-08-26): the independent full-113-task run measured **58.4% (66/113, 95% CI 49.2–67.1%)**, with 80% of solved tasks landing ≥90% of their fail-to-pass tests and **9.7% of the benchmark lost to tool-call format failures** — not reasoning failures; larger third-party evaluations converged at ~62.8–63%, bracketing the vendor's 63.4%.
- Kingbench: **87.5%** (2nd, behind GLM-5.3's 91.25%, ahead of Qwen 3.8 Max 81.25% and Opus 4.8 80%) — non-standard, no published auditable methodology; the near-match with GLM-5.3 was part of the lineage fingerprinting that preceded the reveal.
- LiveBench snapshot for the label `ox-alpha-max` (LiveBench-2026-06-25, third-party observation): Overall 69.2, Reasoning 76.6, Coding 75.8, Agentic coding 52.6, Mathematics 77.5, Data analysis 75.8, Language 66.1, Instruction following 60.3 — the label's identity as this model is not established; directional only.
- OrcaRouter spec sheet (2026-09-28) confirms the provenance split: Z.ai's benchmark table is entirely vendor-reported (AA does not reproduce these rows), while AA independently corroborates the envelope (320B total / 18B active, 1M context, MIT licence, open weights, 2026-08-26 release, $0.15/$0.50 list, $0.026 cache) and reads the Intelligence Index at **41.8 on v4.3.2 at max effort**. No SWE-bench Verified score exists at all (oxalpha.run, last verified 2026-09-04); benchable.ai's near-perfect domain scores are auto-generated and excluded.
- Cost note: the repo meta.json's "Free OpenCode Zen tier" claim is not confirmed by the sibling entry's pricing research (paid routes only, $0.026/$0.93 to $0.14/$0.45 on OpenRouter) — Cost harmonized to the sibling's 95.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02 (updated 2026-10-08)
- Method: public internet research (Z.ai reveal and docs, OrcaRouter spec sheet, OpenRouter/TokenRa listings, oxalpha.com, community DeepSWE runs, Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Ox_Alpha.md`, using the same headings.
