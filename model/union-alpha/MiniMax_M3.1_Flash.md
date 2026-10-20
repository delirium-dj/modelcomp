# Union Alpha — findings by MiniMax M3.1 Flash

- Source: OpenCode (stealth preview) / Unbiased (Pareto composite service), `union-alpha`
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Union Alpha (stealth preview of the Unbiased "Pareto" composite service)
- **Short description:** A free, limited-time stealth model on OpenCode Zen (pay-as-you-go) and OpenCode Go (subscription), live **2026-09-16 to 2026-09-18** before being retired. Behind it sits Unbiased's "Pareto" composite model, which "runs several models on your request and keeps the best answer". **Identity note:** OpenCode never named a vendor, but the context window (262,144), max output (131,072) and the paid route's price ($2.50/$7.50, $0.25 cached) match Unbiased's `unbiased/pareto-26.9` exactly — the identification is strongly corroborated but was never vendor-confirmed, and the "~74% DeepSWE" figure in circulation belongs to GPT 6 Astra, not to Pareto.
- **Provider / access:** OpenCode Zen `union-alpha` — **retired**; it is absent from today's Zen model table, the Zen free-model list and `https://opencode.ai/inference/v1/models`. Endpoint while live: `https://opencode.ai/zen/v1/messages` (`@ai-sdk/anthropic`) plus the Go endpoint. The paid successor is Unbiased's Pareto service (`unbiased/pareto-26.9` on OpenRouter, 262,144 ctx, $2.50/$7.50/$0.25; Pareto 26.10 is GA at $0.80/$3.20/$0.03 with 1M context).
- **Release / knowledge:** added 2026-09-16, retired 2026-09-18 (models.dev and opencode commit history: "feat(opencode): add Union Alpha", "fix(opencode): label Union Alpha as free", "chore: remove expired Union Alpha model", "chore(go): retire Union Alpha"). Knowledge cutoff not published.
- **IDs:** `union-alpha` (OpenCode Zen, retired) · `unbiased/pareto-26.9`, `unbiased/pareto-26.10` (OpenRouter, the commercial service behind it).
- **Context window:** **262,144** tokens, **131,072** max output (models.dev `providers/opencode/models/union-alpha.toml`; identical values on OpenRouter's `unbiased/pareto-26.9`).
- **Modalities:** text + image in, text out; reasoning enabled; tool calling supported (models.dev entry).
- **Pricing (as of 2026-10-20):** while live on Zen the model was **free** (input / output / cached all free) with a zero-retention, no-training provider. The paid Pareto route is $2.50/M in, $7.50/M out, $0.25/M cached (26.9) or $0.80/$3.20/$0.03 (26.10).
- **Architecture:** proprietary and undisclosed; the service is a **composite/router**, not a single checkpoint — which is why quality varies with the underlying pool and why no weights exist.

### Raw benchmarks found

> Union Alpha itself published no benchmark rows (no Artificial Analysis page, no BenchLM page). The numbers below are Unbiased's published Pareto results for the same service — 26.9 (Sep 20, 2026) and 26.10 (Oct 1, 2026) — and are used as the closest verified proxy for the composite.

Agent / tool use:

- Terminal-Bench 4.0: **50.8%** at **$0.48/task** (Unbiased Pareto 26.10, https://unbiased.ai/model-card) — for comparison BenchLM's best on TB 4.0 is Claude Sonnet 5.5 at 70.6%
- Tau2-bench / Tau3 / GDPval-AA / OSWorld / AutomationBench / Toolathlon / MCP-Atlas: no verified public score found for the Pareto composite
- Tool-call pricing: none published (the model is a hosted composite)

Reasoning / knowledge:

- GPQA-Diamond: **92.4%** at **$0.004/task** (Pareto 26.10)
- HLE (text-only): **49.9%** at **$0.008/task** (Pareto 26.10)
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found for the composite service
- Omniscience / hallucination rate: no verified public score found

Coding:

- DeepSWE v1.1: **69.9%** at **$0.24/task** (Pareto 26.10) · **70.0%** at **$0.29/task** (Pareto 26.9, 30-task slice, run 2026-09-20)
- SWE-bench Verified / LiveCodeBench / SciCode: no verified public score found for the composite
- Conflict: the "DeepSWE ~74%" figure attached to Union Alpha in secondary write-ups matches **GPT 6 Astra = 74.0%** in Unbiased's own comparison table, not Pareto — flagged as a conflation, not used here.

Long context:

- No MRCR / RULER retrieval measurement published; 262K window declared via models.dev/OpenRouter metadata only.

### Normalized scores (1–100)

- **Tool use: 58/100.** Terminal-Bench 4.0 50.8% (Unbiased's own run) is mid-band and the per-task costs are excellent ($0.48/task), but there is no τ², GDPval, OSWorld or AutomationBench evidence for the composite, so it cannot be scored higher on unverified strength.
- **Reasoning: 80/100.** GPQA-Diamond 92.4% and HLE text-only 49.9% are frontier-adjacent numbers for the underlying service, and the router keeps the best candidate answer; the cap is that both figures come from one vendor-run dataset with no independent replication and no published Intelligence Index.
- **Context window: 70/100.** 262,144 tokens with 131,072 max output maps to the 200K–500K tier; no long-context retrieval test is published, so the tier midpoint stands.
- **Multimodal: 68/100.** Text and image input with text output per the models.dev entry — image-in band, with no multimodal benchmark published to confirm behaviour.
- **Coding: 78/100.** DeepSWE v1.1 at 69.9–70.0% is close to the 74% frontier reference and remarkable at $0.24–0.29 per task, but there is no SWE-bench Verified or LiveCodeBench figure for the composite, which caps the score.
- **Cost efficiency: 100/100.** The evaluated tier was free ($0 input/output/cached on Zen, zero-retention, no training). Note: the paid Pareto route is $2.50/$7.50 per 1M (would score ≈75) and Pareto 26.10 is $0.80/$3.20.
- **Overall Score: 71/100.** Mean of the five quality dims = (58 + 80 + 70 + 68 + 78) / 5 = 70.8 → **71**. Best fit: cheap frontier-adjacent research and coding via a best-of-pool router — but Union Alpha itself is retired; use Unbiased's Pareto service (or OpenRouter) instead.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-20
- Method: public internet research (Unbiased model card, pricing and changelog, OpenRouter API, models.dev commit history, OpenCode Zen docs and live model endpoint); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Pareto_26.10.md`, using the same headings.
