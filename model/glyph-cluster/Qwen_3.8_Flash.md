# Rater report: Qwen 3.8 Flash

## Model: Glyph Cluster

> **PROVISIONAL (stealth, low confidence).** Vendor-undisclosed weights; community tokenizer-forensics _attributes_ it to Microsoft MAI but that is **unconfirmed**, so no MAI-Thinking-1 numbers are imported as a lineage proxy. Scored only on **exact-ID `stealth/glyph-cluster` measured rows** (NiteAgent Arena) + confirmed spec. Re-verify — stealth models can be swapped or retired without notice. My Overall (55) is deliberately below the current queue average (73), which appears to lean on the unconfirmed identity/capability assumption.

- **Overall Score: 55/100**
- **Confidence: Low**
- **Tool use: 52/100.**
- **Reasoning: 72/100.**
- **Context window: 76/100.**
- **Multimodal: 15/100.**
- **Coding: 62/100.**
- **Cost efficiency: 100/100** — free preview tier ($0/$0/$0 via Vercel AI Gateway & OpenRouter) during stealth. _Excluded from Overall (report-only); promo, may end._

## Summary

Glyph Cluster is an anonymous "stealth" reasoning endpoint surfaced for free on Vercel AI Gateway and OpenRouter (`stealth/glyph-cluster`), with 256K context / 256K max output and text-only I/O. Its headline claim is test-time-reasoning quality at no cost, and it is a competent mid-tier long-form/agentic-writing model on the only public exact-ID measurement I found: the NiteAgent Arena, where it went 2–6 (25% win rate), avg 7.91/10, best 8.8 — trading blows with recognized mid-tier reasoning models (deepseek-v4.1-flash, glm-5.3-flash, mimo-v2.6-flash) and once winning a match outright. The community (r/vercel, r/opencode) has tried to unmask it via tokenizer forensics, pointing at Microsoft MAI, but the vendor has not confirmed any identity, so its true class remains a hypothesis. Real weaknesses are documented: the meta notes "timeout sensitivity on pass@1" on complex autonomous agent benchmarks, and users report severe throughput instability (≈200 tok/s collapsing to ≈15 tok/s), consistent with an un-SLA'd stealth route. It gets a strong Context (256K, 200K–500K band) and a solid Reasoning mark from the arena, a text-only Multimodal 15, and a provisional Tool/Coding that credit the SWE-flavored arena tasks it completed while discounting the agent-timeout and routing reliability problems. Treat every number here as provisional until the identity is disclosed or an independent absolute benchmark (AA/LMArena) picks it up.

## Sources

- NiteAgent Arena leaderboard + match history (exact-ID `stealth/glyph-cluster:free`: 2–6, 25% win, avg 7.91/10, best 8.8; wins/places vs deepseek-v4.1-flash, glm-5.3-flash, mimo; one outright win) — https://niteagent.com/arena/
- "Glyph Cluster Investigation — Microsoft MAI?" (tokenizer-forensics attribution; **unconfirmed**) — https://www.reddit.com/r/opencode/comments/1x1aoeu/ ; https://www.reddit.com/r/vercel/comments/1x1d60n/
- Free-tier / stealth-period confirmations (Vercel AI Gateway + OpenRouter, `stealth/glyph-cluster`) — https://www.aipromonow.com/en/promos/ ; https://legalagent.co.jp/en/legal-lab/ai-news/ ; https://github.com/peter123023/awesome-free-llm-api
- Throughput instability report (~200 → ~15 tok/s) — https://x.com/CommandCodeAI/status/2108034965938319768
- Local `meta.json` (256K/256K, text-only, free $0/$0/$0; agent pass@1 timeout caveat) — `model/glyph-cluster/meta.json`

Research date: Nov 10, 2026
