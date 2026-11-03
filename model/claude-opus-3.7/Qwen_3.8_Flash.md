# Claude Opus 3.7 — findings by Qwen 3.8 Flash

- Source: Anthropic (`claude-opus-3.7`; curated id `opencode/claude-opus-3.7`), cross-checked against llm-stats.com benchmark tables, Anthropic Claude 4 / Sonnet-4 launch copy, and serenities/aireleasetracker comparison pages
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 3.7
- **Short description:** Anthropic's Opus-class flagship of the early-2025 Claude 3.7 / Sonnet-4 generation — the heavier sibling positioned above Claude 3.7 Sonnet and just before the Claude Opus 4 line (May 2025). Extended-thinking agentic coder and reasoning model. **Variant flag:** no benchmark table is published under the *exact* "Opus 3.7" label; the closest verified Anthropic rows are **Claude 3.7 Sonnet** (Feb 2025) and **Claude Opus 4** (May 2025), so this report is scored on those as bracketing proxies and is flagged provisional.
- **Provider / access:** Anthropic API, AWS Bedrock, Google Vertex. Extended-thinking mode with toggleable reasoning budget.
- **Release / knowledge:** 2025 (Claude 3.7 / Sonnet-4 generation); Opus 4 shipped 2025-05-22, so Opus 3.7 sits immediately prior. No distinct knowledge-cutoff disclosed for this label.
- **IDs:** `anthropic/claude-opus-3.7`; lineage neighbours `claude-3-7-sonnet`, `claude-opus-4`.
- **Context window:** **200,000 tokens** (uniform across the 3.7/Opus-4 generation per llm-stats); max output ~64K (thinking-inclusive).
- **Modalities:** text + image in / text out; reasoning yes (extended thinking); tool calls yes; JSON mode yes. **No audio/video input** for this generation — image-only vision.
- **Pricing (as of 2026-11-03):** Opus-tier premium — proxy at Claude Opus pricing **$15/M input, $75/M output** (Claude 3.7 Sonnet was $3/$15; the Opus class is ~5× that).
- **Architecture:** proprietary closed weights.

### Raw benchmarks found

> Proxy-based (see variant flag). Values are the nearest verified Anthropic-model rows, not literal "Opus 3.7" absolutes.

Reasoning / knowledge:

- GPQA Diamond: **~79–85%** (Claude Opus 4 79.6%, Claude 3.7 Sonnet reported 84.8% on llm-stats' GPQA row) — expert-science reasoning near the 2025 frontier.
- MMMLU: **~88%** (Opus 4 88.8%).
- LLM Stats composite: **23–27** band (Opus 4 27.2, 3.7 Sonnet 23.3), i.e. upper-mid on the current 2026 index scale.

Coding:

- SWE-bench Verified: **~62–72%** (3.7 Sonnet ~62%; Opus 4 higher and won the head-to-head on SWE-bench). No exact "Opus 3.7" row published.
- Terminal-Bench: Opus 4 wins the shared head-to-head vs 3.7 Sonnet; mid-band absolute for its era.

Agent / tool use:

- τ-bench Retail: **~81%** (Opus 4 81.4%, 3.7 Sonnet 81.2%); Tool-use TrueSkill index **~18–19** (llm-stats).

Long context:

- 200K window; **no MRCR/RULER retrieval score published** for this exact ID.

### Normalized scores (1–100)

- **Tool use: 70/100.** τ-bench ~81% and Anthropic's launch-era agentic tool-calling were strong for 2025, but no 2026-current MCP/Toolathon absolutes exist for this exact label; scored as a capable first-tier agentic model of its generation.
- **Reasoning: 76/100.** GPQA ~80–85% and MMMLU ~88% place it near the 2025 expert-reasoning frontier; capped below today's 94–96% GPQA leaders because it predates the Opus-4.x/5 reasoning gains.
- **Context window: 65/100.** 200K is a solid but now-mid window (superseded by 1M-class entries); no long-context retrieval benchmark published for this ID, so it scores as adequate rather than frontier.
- **Multimodal: 40/100.** Image input + text output only for this generation (no audio/video/document-native per Claude 3.7/Opus-4 reality, despite aggregator "audio/video" boilerplate); clears the text-only floor with genuine vision.
- **Coding: 73/100.** SWE-bench Verified ~62–72% (Opus-class, ahead of 3.7 Sonnet) and Terminal/τ wins in the head-to-head — strong agentic coding for its moment, a notch below the 80%+ frontier tier of late 2026.
- **Cost efficiency: 25/100.** Opus-tier $15/$75 per 1M is very expensive; only its reasoning-per-token quality keeps it above the floor.
- **Overall Score: 64.8/100.** Half-up mean of the five quality dims (70+76+65+40+73)/5 = 64.8. Best fit: a 2025-era premium agentic-reasoning flagship, now legacy relative to Opus 4.x/5; **provisional** because it is scored on Claude 3.7 Sonnet / Opus 4 proxies rather than an exact published "Opus 3.7" benchmark row.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-03
- Method: public internet research — llm-stats.com Claude 3.7 Sonnet vs Claude Opus 4 tables (GPQA 84.8/79.6, MMMLU 88.8, τ-bench Retail ~81, 200K ctx, $3/$15 vs $15/$75 pricing), Anthropic "Introducing Claude 4" (SWE-bench/Terminal-Bench/GPQA/AIME reporting), serenities.ai and aireleasetracker comparison pages, and Threads/Threads pricing listings referencing "claude opus 3.7" as an Opus-tier SKU. Scores are normalized 1–100 interpretations, not official vendor scores. Aggregator "audio/video" modality claims were overridden with first-party Claude 3.7/Opus-4 vision reality (image-only).
- Revisit trigger: publication of a first-party or Artificial Analysis / BenchLM benchmark row under the exact `claude-opus-3.7` ID, replacing the Sonnet-4.6/Opus-4 proxy basis.
- Future sources: add a new file next to this one, e.g. `Claude_Opus_4.5.md`, using the same headings.
