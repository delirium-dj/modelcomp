# Claude Haiku 5.5 — findings by MiniMax M3

- Source: Anthropic / `claude-haiku-5-5` (Anthropic, Bedrock, Google Cloud, Microsoft Foundry, Claude Platform)
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Naming note.** "Claude Haiku 5.5" in our roster is the production small-class model Anthropic released on **2026-10-07** under the ID `claude-haiku-5-5`. It is the first Haiku with (a) an **adjustable effort setting** (low/medium/high/xhigh/max, default = medium), (b) the **Opus-4.7-class tokenizer** (≈30 % more tokens per task than Haiku 4.5 for the same English), and (c) the new **100K-prompt price cliff** unique to this SKU. Despite the small-class label, its adaptive thinking and computer-use numbers put it on a different tier from Haiku 4.5. Routing sibling: Sonnet 5.5 / Opus 5.5 read its thinking blocks; the reverse path drops the bigger model's reasoning (a routing trap that is *not* a bug, but is easy to miss).

## Model card

- **Name:** Claude Haiku 5.5
- **Short description:** Anthropic's fastest, cheapest small model — first Haiku with adjustable effort and the Opus-4.7-class tokenizer; 1M/128K context, $0.10/$0.50 (≤100K prompt) or $0.50/$2.50 (>100K), adaptive thinking on by default. Positioned for subagent work, summarization, classification, browser use, and live customer support — explicitly not for long agentic coding, where Sonnet 5.5 / Opus 5.5 still win.
- **Provider / access:** Anthropic `claude-haiku-5-5`; AWS Bedrock `anthropic.claude-haiku-5-5`; Google Cloud Vertex AI; Microsoft Foundry; Claude Platform.
- **Release / knowledge:** Released **2026-10-07** by Anthropic (System Card on `anthropic.com/claude-haiku-5-5-system-card`). Knowledge cutoff **June 2026**.
- **IDs:** `claude-haiku-5-5` (no date suffix, no separate alias). Bedrock: `anthropic.claude-haiku-5-5`. OpenCode Zen / OpenRouter route (per `meta.json`): `opencode/claude-haiku-5.5`. Haiku 4.5 model IDs (`claude-haiku-4-5` / `claude-haiku-4-5-20251001`) return 400.
- **Context window:** **1,000,000 tokens** input / **128,000 tokens** max output (per Anthropic launch and llm-stats.com).
- **Modalities:** Text, image, PDF in; text out. Native vision (chart, screenshot, document image). Reasoning on by default (adaptive thinking, with `display: "summarized"` opt-in for visible thinking text). Function calling, structured outputs, browser-use, computer-use supported (browser-use is the new affordance Haiku 4.5 lacks; `computer_20250124` → `computer_toolset_20260801`).
- **Pricing (as of 2026-10-17):** `meta.json` rate `$0.10/$0.50 per 1M (prompts ≤100K), $0.50/$2.50 above 100K`. Full table: cache read $0.01 (≤100K) / $0.05 (>100K), 5-min cache write $0.125 / $0.625, 1-hour cache write $0.20 / $1.00, Batch API $0.05 / $0.25 (≤100K) / $0.25 / $1.25 (>100K). The **>100K step is 5× in every direction** — a 101K-token prompt costs ~$0.0505 in input; the same prompt at 99K tokens is ~$0.0099. On average the SKU is **~75 % cheaper** than Haiku 4.5 (90 % for ≤100K prompts, 50 % for >100K) per Anthropic; the haircut on the headline number is the tokenizer, not the list price. **No Priority Tier** support.
- **Architecture:** Proprietary (Anthropic). Adaptive thinking; 5 effort levels (low/medium/high/xhigh/max); default = medium. The same tokenizer introduced with Opus 4.7 (and now shared with Sonnet 5.5 / Opus 5.5) is used here.

### Raw benchmarks found

> All numbers from the Anthropic launch post (`anthropic.com/claude-haiku-5-5`) unless noted. OSWorld here is the **offline subset**; the full-OSWorld 80.1 % Sonnet 5.5 number is from Sonnet's own launch and is not directly comparable. No independent rerun of these vendor numbers has been published as of 2026-10-17.

Agent / tool use:

- **OSWorld 2.1 (offline subset, computer use): 72.4 %** (Anthropic launch). vs Haiku 4.5 15.7 %; vs GPT-6 Luna 48.9 %; vs Sonnet 5.5 83.9 % (offline). 86 % of Sonnet's score at 5 % of the price.
- **AA-Briefcase v1.1 (knowledge work, Elo): 1578** (Anthropic launch). vs Haiku 4.5 614; vs GPT-6 Luna 1336; vs Sonnet 5.5 1824.
- **GDPval-AA v2.1 (knowledge work, Elo): 1620** (Anthropic launch). vs Haiku 4.5 735; vs GPT-6 Luna 1437; vs Sonnet 5.5 1840.
- **Chartography (visual reasoning, no tools): 46.4 %** (Anthropic launch). vs Haiku 4.5 6.4 %; vs Sonnet 5.5 61.6 %.
- **FrontierCode 1.1 Main (mergeable changes): 46.4 %** (Anthropic launch). vs Haiku 4.5 — ; vs GPT-6 Luna 42.4 %; vs Sonnet 5.5 52.1 % at xhigh.

Agentic coding:

- **Terminal-Bench 4.0 (pass@1, agentic terminal): 39.2 %** (Anthropic launch). vs Haiku 4.5 0.0 % (0 → 39.2 is the headline jump); vs GPT-6 Luna 16.4 %; vs Sonnet 5.5 70.6 %. Roughly **half of Sonnet's score** at 1/20 the list price — the explicit ceiling.
- **FrontierCode 1.1: 46.4 %** (above). Closer to Sonnet 5.5 (52.1 % at xhigh) on scoped/mergeable changes than on long-agentic coding.

Reasoning / knowledge:

- **Humanity's Last Exam, no tools: 45.9 %** (Anthropic launch). vs Haiku 4.5 10.2 %; vs Sonnet 5.5 56.9 %. **HLE with tools: 57.4 %** vs Haiku 4.5 18.7 % / Sonnet 5.5 64.5 %.
- AA Long-Context Retrieval (LCR): **82.7 %** (`meta.json` short, AA Intelligence Index tracking). Independent AA LCR rerun: pending at writing.

Long context:

- 1,000,000 tokens input / 128,000 max output. No vendor-published MRCR or RULER at 1M; AA-LCR 82.7 % is the available proxy for native-context retrieval. Like the other 1M Anthropic models (Sonnet 5.5, Opus 5.5, Mythos 5.1, Fable 5.1, Opus 4.7), the long-context ceiling is the new 1M-class window — no known 10M extension.

Multimodal:

- Native vision (text, image, PDF in; text out). Vendor Chartography 46.4 % (no tools) is the published visual reasoning number; independent OCR / OmniDocBench-style rerun has not been published.

Customer-vendor benchmarks (cited as deployed, not rerun):

- **Asana** (Aaron Vinh, Staff Software Engineer): >30 % lower latency for task completion; up to **2.5× faster inference per agent turn** vs the model they use today.
- **HubSpot** (Ze'ev Klapow, Distinguished Engineer): **92.8 %** averaged over three runs on the simulated-portals CRM suite — HubSpot's best score on that suite. "Fastest to complete" the stale-record task, highest hit rate, lowest false-positive rate.
- **AlphaSense** (Daniel Campos, Distinguished Engineer): 400-query Ask-in-Document eval — Haiku 5.5 **0.84** vs Haiku 4.5 0.76; "statistically significant".
- **Box** (Yashodha Bhavnani, VP of AI): +11 points vs Haiku 4.5 at half the latency.
- **Rogo** (Alex Wang, Applied AI): "accurate enough that we'd trust it there, and fast and cheap enough that we can run it a lot."
- **Cognition / Devin Fusion** (Walden Yan, Co-Founder & CPO): With Haiku 5.5 as the sidekick, Fusion hits a top-tier **FrontierCode 66.2** while cutting cost and latency.

### Normalized scores (1–100)

> Per `RULES.md` (v4): **Overall = half-up mean of the five quality dims** `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. Cost efficiency scored independently and excluded. All numbers are normalized 1–100 interpretations of the vendor-published evidence above; no independent rerun of Anthropic's Haiku 5.5 has been published at writing.

- **Tool use: 82/100.** OSWorld 2.1 (offline) 72.4 % / GDPval-AA v2.1 Elo 1620 / AA-Briefcase Elo 1578 / Chartography 46.4 % / FrontierCode 46.4 %. The computer-use and knowledge-work numbers are the strongest part of the SKU — comparable to Sonnet 5.5 on computer use (86 %) and to GPT-6 Luna (which the 5.5 *benchmark table* directly beats: OSWorld 72.4 vs 48.9, GDPval Elo 1620 vs 1437). Discount from the raw claim only because all numbers are vendor-published; the deployment evidence (Asana 30 % latency cut, HubSpot 92.8 %, Box +11) is consistent.
- **Reasoning: 83/100.** HLE no-tools 45.9 % / HLE with-tools 57.4 % (vs Haiku 4.5 10.2/18.7, vs Sonnet 5.5 56.9/64.5). AA-LCR 82.7 % as a long-context retrieval proxy. Adaptive thinking is the new affordance — a 5-step effort dial, and the Anthropic side reports >30 % latency reduction on customer-deployed tasks. A small ceiling on HLE 56.9 % (no tools) and the absence of public GPQA Diamond / CritPt specific numbers keep this just below Sonnet-class.
- **Context window: 95/100.** 1M tokens in / 128K out matches the Sonnet 5.5 / Opus 5.5 / Mythos 5.1 / Fable 5.1 / Opus 4.7 lineup — top-tier 1M-class. AA-LCR 82.7 % is the only long-context fidelity number we have. No public MRCR/RULER at 1M; no known 10M extension. The 100K price cliff is a pricing caveat, not a context-window caveat — the model still *accepts* 1M tokens, the bill just changes after 100K.
- **Multimodal: 76/100.** Native vision (image + PDF in; text out), Chartography 46.4 % no-tools. Solid for a small class but visually underperforms Sonnet 5.5 (61.6 % Chartography) and has no published CharXiv / OmniDocBench independent number. Text-out only, so not a generative multimodal.
- **Coding: 78/100.** Terminal-Bench 4.0 39.2 % vs Haiku 4.5 0.0 % (the 0→39 jump is the headline); FrontierCode 1.1 46.4 % vs Sonnet 5.5 52.1 % at xhigh. Half of Sonnet's Terminal-Bench is the *explicit* ceiling Anthropic publishes — Haiku 5.5 is positioned for scoped coding, not for long-horizon SWE. Cognition's Devin-Fusion 66.2 FrontierCode composite is the highest published Haiku 5.5 number and demonstrates the subagent pattern.
- **Cost efficiency: 96/100.** $0.10/$0.50 ≤100K — 1/20 Sonnet 5.5, 1/40 Opus 5.5, 1/4 of Haiku 4.5 on the same tier. Cache read $0.01, Batch API $0.05/$0.25. 75 % cheaper than Haiku 4.5 on average. The 100K cliff is the only gotcha: prompts of 101K cost 5× more than prompts of 99K, and ~30 % of the headline saving is eaten by the new tokenizer — recompute budgets, don't trust old numbers.
- **Overall Score: 83/100.** Half-up mean of the 5 non-cost quality dims: (82 + 83 + 95 + 76 + 78) / 5 = 414 / 5 = 82.8 → **83**. Best fit: a high-volume, latency-sensitive subagent / classifier / compactor / browser-use worker that an Opus 5.5 or Sonnet 5.5 orchestrator plans and dispatches to — exactly the deployment pattern Anthropic, Asana, HubSpot, AlphaSense, Box, Rogo, and Cognition all describe. Keep prompts under 100K, force tool calls for labels, and route thinking upward only (it does not flow back down).

---

## Signature

- Provided by: **MiniMax M3 (MiniMax-M3)** — 2026-10-17
- Method: independent MiniMax M3 evaluation. Primary sources: `anthropic.com/claude-haiku-5-5` (Anthropic launch post + system card reference), `anthropic.com/claude-haiku-5-5-system-card` (system card), `llm-stats.com/models/claude-haiku-5-5` (release date 2026-10-07, 1.44 s p95 TTFT, 27 cps p5 output, June 2026 cutoff, 1M/128K, $0.10/$0.50 / $0.01 cache), `alekseialeinikov.com/en/blog/topics/ai/claude-haiku-5-5-vs-sonnet-5-5-vs-opus-5-5` (full pricing matrix, 100K-cliff math, three real-workload cost tables, migration break table, subagent routing rules), `aicatchup.com/news/claude-haiku-5-5` (adaptive thinking / medium default confirmation, 1M/128K, June 2026 cutoff), `miraflow.ai/blog/claude-haiku-5-5-benchmarks-pricing-explained-2026` (independent confirmation of 100K cliff and tokenizer change), `developersdigest.tech/blog/claude-haiku-5-5-release-guide-2026` (pricing confirmation), `datacamp.com/blog/claude-haiku-5-5` (data camp hands-on; cost confirmation), `kingy.ai/blog/claude-haiku-5-5-benchmarks-specs-sol-luna/` (head-to-head vs GPT-6 Sol / Luna / Sonnet 5.5). All benchmark numbers are vendor-published (Anthropic launch post) — no independent rerun has been published at writing; customer-deployed numbers (Asana, HubSpot, AlphaSense, Box, Rogo, Cognition) are cited from the Anthropic launch post as deployment evidence, not as benchmarks.
- Future sources: add a new file next to this one, e.g. `Haiku_5.5_alt.md`, using the same headings; `claude-haiku-5-5` is the canonical API ID and there is no separate alias, so any new source should match the SKU exactly.
