# Ox Alpha — findings by Muse Spark 1.3

- Source: Z.ai GLM-5.3-Flash stealth route (`stealth/ox-alpha` → `opencode/ox-alpha`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ox Alpha (confirmed stealth codename for Z.ai GLM-5.3-Flash during its pre-release week)
- **Short description:** Z.ai's anonymous preview of GLM-5.3-Flash served as `ox-alpha` on OpenCode and OpenRouter ("most popular model of the week", all traffic on Chinese AI chips); free during preview, later launched as GLM-5.3-Flash at $0.37/$1.25.
- **Provider / access:** Stealth route via OpenRouter (`stealth/ox-alpha`) and OpenCode Zen `opencode/ox-alpha` (Chat Completions, tool calling supported). Identity confirmed by the vendor itself (z.ai GLM-5.3-Flash launch blog 2026-08-26); corroborated by tokenizer forensics (44/44 GLM-5-generation match, LuD1161 campaign) and near-identical Kingbench scoring vs GLM-5.3.
- **Release / knowledge:** 2026-08 stealth preview; revealed 2026-08-26; knowledge cutoff undisclosed
- **IDs:** `opencode/ox-alpha` (Free experimental ID on Zen; the launched model is `opencode/glm-5.3-flashx` / `z-ai/glm-5.3-flashx`)
- **Context window:** 1,048,576 in / 131,072 out — OpenRouter metadata plus black-box forensics (3/3 needles at 934,221 tokens, practical edge ~1.005M, 131K output cap)
- **Modalities:** text, image, video, PDF in; text out; reasoning yes (visible thinking stream); tool calls yes
- **Pricing (as of 2026-10-07):** $0 free during the stealth preview (route-level); launched Flash pricing $0.37/$1.25 per 1M (no free tier) — scored on the $0 preview route actually researched
- **Architecture:** Same weights as GLM-5.3-Flash (320B/18B hybrid linear+sparse MoE); base weights MIT-licensed, the stealth route proprietary-served

### Raw benchmarks found

> Re-researched 2026-10-07: identity confirmed, so GLM-5.3-Flash's launch table counts as same-weights evidence (Mythos/Fable precedent), labeled per row. Route-specific community runs listed separately.

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** (Flash launch table, same weights; vs 5.2 81.0, Opus 4.8 85.0)
- Terminal-Bench 3.0 (independent): **26.58% pass@1 (25.00% strict full solves)** (HF era-logic eval record, Harbor harness, mini-swe-agent 2.4.6, max effort, Aug 21–22; 0.895B tokens total — efficient vs Opus 5 1.46B/Sol 1.16B)
- Toolathlon Verified: **78.4%** (Flash launch table, same weights; vs 5.2 59.9, Opus 4.8 76.2)
- AutomationBench v1.0.6: **48.8%** (Flash launch table; vs 5.2 26.2, Opus 4.8 41.0)
- Agents' Last Exam: **26.3** (Flash launch table; vs Opus 4.8 27.0)
- GDPval-AA v2: **1773** (Flash launch table; vs Opus 4.8 1582)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- Intelligence Index (vendor comparison page): **59** (ox-alpha.org vs-GLM-5 page, Ox Alpha column; GLM-5 57 — vendor-site claim, small-sample provenance); **57 AA Index v4.1.1 post-reveal** (AA listing for GLM-5.3 Flash — corroborates)
- Agentic coding (vendor comparison page): **78** (same page, Ox Alpha column; GLM-5 72 — vendor-site claim)
- Claw-Eval / ClawProBench: **no verified public score found**
- SWE Atlas Codebase QnA: **no verified public score found**
- benchable.ai 95–100% rows: excluded as unreliable (auto-generated page, contradicts LiveCode 28% and OpenCode #26; see oxalpha.run audit)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found** (Flash launch table carries no GPQA row either)
- HLE: **55.3% HLE w/ Tools** (Flash launch table, same weights; vs 5.2 54.7, Opus 4.8 57.9)
- LiveBench Reasoning (label-level only): **76.6** (LiveBench 2026-06-25 snapshot, label `ox-alpha-max`, transcribed by oxalpha.io disclosure page; route attribution to `stealth/ox-alpha` NOT established); same listing: **Math 77.5 / Data 75.8 / Language 66.1 / IF 60.3 / Coding 75.8 / Agentic 52.6 / Overall 69.2** (label-level, $0/task)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **57 v4.1.1 post-reveal** (AA GLM-5.3-Flash listing — replaces the proxy)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- Community 10-task real-world coding run: **80% (8/10 solved)** (oxalpha.com benchmarks page; references Fable 5 max 65%, GLM-5.3 max 62%, GPT-5.6-sol max 52%, Grok 4.6 xhigh 62% — third-party data, small sample, directional not definitive; later analysis: the 10-task slice of DeepSWE, full 113-task run ~63%)
- DeepSWE v1.1: **63.4%** (Flash launch table, same weights; vs 5.2 46.2, Opus 4.8 58.0); **~63% community full 113-task run** (58/58.4 variants cited — corroborates; mid-tier, near Opus 4.8)
- NL2Repo: **56.3%** (Flash launch table, same weights)
- LiveCodeBench: **28.0% v6 independent repro** (greedy temp-0 single attempt: Easy 51.2/Medium 30.8/Hard 13.8 — falls off hard; contradicts the frontier-coder framing)
- Kingbench: **87.5% 2nd** (non-standard community bench, no auditable methodology — provisional; near-match with GLM-5.3 cited as lineage evidence)
- aicodingdaily OpenCode board: **8.9/20 pts, #26** (mid-pack real-usage signal)
- SWE-bench Verified / SWE-Pro: **no verified public score found** (none for Flash either)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**

Long context:

- **1M context with 131K max output verified from provider metadata + black-box forensics** (no verified MRCR v2 / RULER / GraphWalks percentage found)

### Normalized scores (1–100)

- **Tool use: 88/100.** TB2.1 84.3% plus Toolathlon 78.4%, GDPval 1773 and AutomationBench 48.8 (all same-weights Flash rows) with independent TB3.0 26.58% show strong agency; capped by zero Tau/GDPval-Elo/Claw rows and TB3.0 mid-pack.
- **Reasoning: 82/100.** HLE w/ Tools 55.3% plus label-level LiveBench 76.6 with AA Index 57 show solid reasoning; capped by zero GPQA/LCR/CritPt absolutes.
- **Context window: 97/100.** Verified 1,048,576 in / 131,072 out (metadata + forensics) maps to the top tier; capped below 100 without retrieval-saturation proof.
- **Multimodal: 87/100.** Text/image/video/PDF in with MMVU 80.5, Chartography 78.0, OfficeQA 62.4 and Vision2Web 77.8 (Flash rows); capped by text-only output.
- **Coding: 86/100.** DeepSWE ~63 plus TB2.1 84.3%, 10-task 80% and NL2Repo 56.3 show strong coding; capped by the LiveCode 28.0 hard-task falloff and zero SWE-Pro/SciCode rows.
- **Cost efficiency: 100/100.** $0 free preview on the researched route (launched Flash pricing noted for context).
- **Overall Score: 88/100.** Mean of the five non-cost dims (88+82+97+87+86)/5 = 88.0; best-fit free stealth sandbox for long-context agentic coding while preview pricing holds — identity now vendor-confirmed.

---

## Signature

- Provided by: **Muse Spark 1.3 (meta/muse-spark-1.3)** — 2026-10-07
- Method: deeper public internet research (oxalpha.com product/benchmarks pages, ox-alpha.org comparison page, oxalpha.io LiveBench disclosure record, ox-alpha.net methodology reference, OpenCode usage data page) + 2026-10-07 re-research pass (z.ai GLM-5.3-Flash launch blog identity confirmation, oxalpha.run evidence audit, LuD1161 tokenizer-forensics campaign, oxalpha.com task table); label-level numbers flagged where route attribution is unproven; benchable.ai rows excluded as auto-generated; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
