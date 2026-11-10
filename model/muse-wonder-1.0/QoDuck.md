# Muse Wonder 1.0 — findings by QoDuck

- Source: Meta (`muse-wonder-1.0`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder 1.0 (Meta Superintelligence Labs; standard/regular "Wonder", API-available variant — distinct from the subscription-only Muse Wonder Full)
- **Short description:** Meta's frontier reasoning/agent model built for long-running tasks, real-world multi-file coding and advanced computer use, with omni-modal input and "Active Memory"/"Active Focus" persistence. The standard variant is sold per-token via the Model API; the more powerful Muse Wonder Full is Muse-Code-subscription-only and is a separate entry.
- **Provider / access:** Meta Model API `muse-wonder-1.0` (Standard mode, preview); OpenRouter `meta/muse-wonder`; all Muse Code plans. Chat Completions-style API with reasoning-effort levels. Full variant (`muse-wonder-full-1.0`) is NOT on the API — excluded here.
- **Release / knowledge:** Released 2026-10-12 (announced by Alexandr Wang, Meta Superintelligence Labs; apxml lists 11 Oct, consensus 12 Oct). Knowledge cutoff not documented.
- **IDs:** `meta/muse-wonder-1.0` (Model API), `meta/muse-wonder` (OpenRouter). No Free hosted ID; closed weights (not downloadable).
- **Context window:** 1,048,576 tokens (1M); max output ~943,718 (~944K) per Inworld. Verified via official Meta page + Inworld + o-mega + Artificial Analysis.
- **Modalities:** Input text + image + video + audio + PDF/documents (omni-modal); output text only. Reasoning: yes (effort levels minimal/low/medium/high/xhigh/max). Tool calls: yes (parallel tools, sub-agent delegation). Structured output / JSON: yes. Vision, prompt caching, web search ($2.50/1,000), Active Memory + Active Focus, advanced computer use (browser/desktop/mobile).
- **Pricing (as of 2026-11-10):** $4.00 in / $0.20 cached / $20.00 out per 1M (95% cache discount; blended ~$2.94/1M per AA); no long-context premium. Web search $2.50/1,000. Standard mode does not train on user content; Muse Code defaults to Contributor mode. Current AA run ~$6.95/Index-task (launch-vintage runs reported ~$4.52/task).
- **Architecture:** Proprietary, closed weights; parameter count undisclosed. (Sibling Muse Glimmer 30B is Apache 2.0, but Wonder is closed.)

### Raw benchmarks found

> Regular Wonder 1.0 values only (Meta launch table at max reasoning effort,
> corroborated by o-mega, layer3labs, mindstudio; independent AA/Vals where noted).
> Full-variant numbers are excluded except as labeled comparators. "no verified
> public score found" = not published for this exact regular ID.

Agent / tool use:

- Terminal-Bench 4.0-AA (**hard**): **52.0%** (Meta table; Full 57.1, Opus 5.5 59.6, GPT-6 Astra 59.1) — trails the leaders.
- OSWorld V2.1 (partial, **computer use**): **72.6%** (mindstudio + Meta; Full 78.4, Opus 5.5 81, Fable 5.1 80).
- AutomationBench-AA: **39.1%** (Meta; Full 45.4, Gemini 4 Argon 51.3).
- JobBench: **70.5** (Meta; Full 75.3).
- Vals Finance Agent V2: **56.6** (Meta; Full 59.1); Vals AI independent: standard **10th of 47 (61.06%)**.
- Harvey LAB-AA (legal agent): **10.0** (Meta; Full 13.1, Opus 5.5 4.2).
- Coding Agents Index (Muse Code): **63.5** (o-mega; Full 68.0).
- GDP.pdf: **30.8** (Meta; Full 33.2). GDPval-AA Elo: no verified public score found for regular Wonder (1857 is Full-only).
- Terminal-Bench 2.1 / Tau3-Banking / Tau2-Bench / MCP-Atlas / Toolathlon: no verified public score found for this regular ID.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **44** current (v5.0.1, precise 43.5748, **#32/74**); launch **52** (v4.3, exact 52.4) — see conflict note. Full = 50 current / 56 launch.
- LiveBench Reasoning **0.91 (#10)**, Mathematics **0.96 (#6)**, Data Analysis 0.82 (#4), Global/Average 0.81 (#8) (apxml; provisional 0–1 fractions).
- HealthBench Pro: **60.5** (Meta; Full 62.3). Personal Superintelligence Index: **54.3%** (Meta; Full 59.1, Opus 5.5 55.2).
- AA-Omniscience: **25**; hallucination rate **27%** (colrows; Full 30 / 23%) — moderate knowledge reliability.
- GPQA Diamond / HLE (full) / AIME / ARC-AGI / CritPt / LCR / MLCR: no verified public score found for regular Wonder (HLE-Diamond and CritPt v2 are named v5.0.1 Index components but no individual value is published).

Coding:

- DeepSWE 1.1 (**hard, independent-corroborated**): **78.8%** (mindstudio + layer3labs + Meta; Full 79.0, Opus 5.5 74.2, GPT-6 Astra 74.1) — clears the 74% top-tier anchor, ahead of Opus/Astra.
- SWE-Marathon (**long-horizon**): **53.1%** (layer3labs + Meta; Full 57.5, Opus 5.5 46.3, Astra 42.5) — beats Opus/Astra.
- ProgramBench (**greenfield/standalone**): **50.0%** (Meta + layer3labs; Full 59.0, Opus 5.5 70.5) — weak vs Opus; documented greenfield code weakness.
- LiveBench Coding 0.81 (#20), Agentic Coding 0.63 (#8); WebDev Arena Elo 1649 (#17); Text Arena Elo 1513 (#2) (apxml; provisional).
- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found for regular Wonder. layer3labs: better at multi-file refactoring than standalone scripts; command-line agents trail rivals; all Meta figures at max effort, limited third-party verification.

Long context:

- 1,048,576-token (1M) window, ~944K max output. MemoryBench **85.6** (Meta internal 64K–100K multi-turn recall, LLM-judged; Full 85.5 — flat across scale). No MRCR / RULER / GraphWalks needle-retrieval-at-length published; no verified ≥98% retrieval at 512K+.

Multimodal:

- Omni-modal input (text/image/video/audio/PDF) confirmed by o-mega, colrows, apxml and kie.ai; text-only output. MMMU-Pro / Video-MME / audio benchmarks: no verified public score found — modality coverage documented but quality unmeasured.

### Normalized scores (1–100)

> Derived from the raw numbers above per `model-comparison.md`. Overall = half-up
> mean of the five quality dims; Cost efficiency scored independently and excluded.

- **Tool use: 84/100.** Terminal-Bench 4.0-AA 52.0%, OSWorld V2.1 72.6%, JobBench 70.5 and Vals Finance Agent 56.6 (Vals AI 10/47) show capable long-horizon agency with parallel tools/sub-agents and computer use; capped below 90 because it trails Opus 5.5 (TB4.0 59.6, OSWorld 81), AutomationBench-AA 39.1 is moderate, and no TB2.1 / Tau3 / GDPval-AA Elo is published for the regular variant to clear the top-tier anchors.
- **Reasoning: 82/100.** LiveBench Reasoning 0.91 (#10) / Mathematics 0.96 (#6) and HealthBench Pro 60.5 indicate solid reasoning with moderate reliability (hallucination 27%, AA-Omniscience 25); capped by the current AA Intelligence Index 44 (v5.0.1, below the 60 top-tier mark; launch v4.3 52) and unpublished GPQA Diamond / HLE for the regular variant.
- **Context window: 95/100.** 1,048,576-token window with ~944K max output meets the ≥1M tier (95–100); MemoryBench 85.6 shows strong 64K–100K multi-turn recall but no published ≥98% needle-retrieval at 512K+ to justify 100.
- **Multimodal: 88/100.** Confirmed omni-modal input (text + image + video + audio + PDF/documents) reaches the +audio-in band on coverage; capped below 90 because output is text-only and no measured MMMU-Pro / video / audio benchmark substantiates top-tier multimodal quality.
- **Coding: 88/100.** DeepSWE 1.1 78.8% clears the 74% top-tier anchor (ahead of Opus 5.5 74.2 and GPT-6 Astra 74.1) and SWE-Marathon 53.1% beats both (Opus 46.3, Astra 42.5) — strong multi-file/repository coding; capped below 90 by weak ProgramBench 50.0 (vs Opus 70.5) on greenfield/standalone code, Terminal-Bench 4.0-AA 52.0 trailing Opus 59.6, and unpublished SWE-bench Verified / LiveCodeBench / SciCode.
- **Cost efficiency: 56/100.** $4 in / $20 out per 1M sits just above the $3/$15≈60 anchor (between 60 and the $10/$50≈30 tier); a generous 95% cache discount ($0.20 cached, blended ~$2.94) softens agent-loop cost, but the premium headline output price caps it at 56.
- **Overall Score: 87.4/100.** Half-up mean of (84 + 82 + 95 + 88 + 88) / 5 = 437 / 5 = 87.4 (Cost excluded). Best fit: long-running agentic and multi-file repository coding/refactoring with 1M omni-modal context and persistent memory, where DeepSWE/SWE-Marathon strength matters more than greenfield code, command-line agents or frontier composite intelligence.

### Conflicting-results notes

- **Intelligence Index 52 (launch) vs 44 (current):** Meta's launch table and AA's own X post give regular Wonder **52** on Index **v4.3** (Full 56; exact 52.4/55.80 per o-mega). The current AA page reports **v5.0.1 = 44** (43.5748, #32/74; Full 50). Resolved in favor of the current AA value (**44**) as authoritative; apxml's "0.44" aligns. The launch 52 is documented as a stale-vintage figure. Index v5.0.1 comprises 9 evals (AA-Briefcase, AutomationBench-AA, TB4.0, FrontierCode 2.0, AA-Omniscience, GDP.pdf, HLE-Diamond, CritPt v2, TB-Science 0.1); individual component scores are not published for regular Wonder.
- **kie.ai "56, #2" headline:** kie.ai's headline attributed 56/#2 to "Muse Wonder", but its own body and colrows/zhihu/myclaw/cometapi/datanorth clarify **56 = Full**, **52 = regular Wonder** (launch v4.3). Resolved: regular = 52 launch / 44 current; 56 is Full-only and not used here.
- **Regular vs Full contamination:** most coverage headlines Full's numbers (DeepSWE 79.0, SWE-Marathon 57.5, TB4.0 57.1, ProgramBench 59.0, GDPval-AA Elo 1857, Personal Superintelligence 59.1). Only regular-Wonder values (DeepSWE 78.8, SWE-Marathon 53.1, TB4.0 52.0, ProgramBench 50.0, OSWorld 72.6, MemoryBench 85.6) are scored; Full's GDPval-AA 1857 is explicitly NOT attributed to regular.
- **Cost/task $4.52 vs $6.95:** launch-vintage runs (colrows/myclaw/o-mega) reported ~$4.52/Index-task; the current AA v5.0.1 run reports $6.95/task (12.9 min, 124 tok/s). Both cited; the difference reflects Index vintage/run, not a price change.
- **Speed 101 vs 124 tok/s:** o-mega launch ~101 tok/s vs current AA 124 tok/s — provider/run variance; not scored.
- **Modalities (Inworld "Text/Image/File" vs omni-modal):** Inworld lists a subset (Text, Image, File + Vision); o-mega, colrows, apxml and kie.ai confirm full omni-modal input (text/image/video/audio/PDF). Resolved: omni-modal input → text output.
- **apxml 0–1 fractions:** LiveBench (Reasoning 0.91, Math 0.96, Coding 0.81) and arena Elos are treated as provisional (possibly stale normalization); used as supporting, not primary, evidence.

---

## Signature

- Provided by: **QoDuck (Qoder agent)** — 2026-11-10
- Method: public internet research — 5+ independent web searches plus direct fetches of the official Meta model page, Artificial Analysis (current v5.0.1), OpenRouter, Inworld, apxml, colrows, kie.ai, o-mega, mindstudio and layer3labs; regular-vs-Full variants carefully separated, official + independent sources cross-compared, and the launch-v4.3 (52) vs current-v5.0.1 (44) Index conflict reconciled in favor of current AA. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Meta — Muse Wonder official model page](https://dev.meta.ai/models/muse-wonder)
  - [Artificial Analysis — Muse Wonder (regular, current v5.0.1)](https://artificialanalysis.ai/models/muse-wonder)
  - [Artificial Analysis on X — Muse Wonder v4.3 launch scores 52 / 56](https://x.com/ArtificialAnlys/status/2109697083519447118)
  - [OpenRouter — meta/muse-wonder](https://openrouter.ai/meta/muse-wonder)
  - [Inworld — Muse Wonder 1.0 specs & API access](https://inworld.ai/models/meta-muse-wonder-1-0)
  - [o-mega — Meta Muse Wonder benchmarks, pricing & access (standard vs Full table)](https://o-mega.ai/articles/meta-muse-wonder-benchmarks-price-and-access-2026)
  - [mindstudio — Muse Wonder vs Opus 5.5 and GPT-6 Astra](https://www.mindstudio.ai/blog/muse-wonder-benchmarks-vs-opus-gpt6)
  - [layer3labs — Muse Wonder for coding: performance, tests, limits](https://www.layer3labs.io/guides/muse-wonder-for-coding)
  - [colrows — Muse Wonder vs Muse Wonder Full (Index, hallucination, SQL gap)](https://colrows.com/blogs/muse-wonder-vs-muse-wonder-full/)
  - [kie.ai — What Is Muse Wonder?](https://kie.ai/blog/what-is-muse-wonder)
  - [apxml — Muse Wonder specs & benchmarks](https://apxml.com/models/muse-wonder)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.